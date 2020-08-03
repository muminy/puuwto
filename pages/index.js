import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Layout from "components/Layout";
import BlogCard from "components/BlogCard";
import { useState, useEffect, useContext } from "react";
import { pages, pageData } from "helper/pagination";
import Pagination from "components/Pagination";
import { NotFoundPosts } from "components/Bootstrap";
import LanguageContext from "context/LanguageContext";

export default function Read({ posts }) {
  const { lang } = useContext(LanguageContext);
  const [postList, setPostList] = useState(
    pageData(1, posts),
  );
  const [value, setValue] = useState("");
  const [pageList, setPages] = useState(pages(posts));
  useEffect(() => {
    if (value) {
      setPostList((prevState) => {
        const filter = prevState.filter(
          (item) =>
            item.title
              .toLowerCase()
              .indexOf(value.toLowerCase()) > -1,
        );
        return [...filter];
      });
    } else setPostList(pageData(1, posts));
  }, [value]);
  return (
    <Layout title="">
      <div className="bigger_header">
        Blog
        <p>{lang.index.blog_info}</p>
      </div>
      <div className="searchBlogs">
        <input
          value={value}
          onChange={(text) => setValue(text.target.value)}
          placeholder={lang.index.search_input}
        />
      </div>
      {postList.length ? (
        <>
          <div className="blogs">
            {postList.map((item) => (
              <BlogCard key={item.id} {...item} />
            ))}
          </div>
          <Pagination page={1} pageList={pageList} />
        </>
      ) : (
        <NotFoundPosts />
      )}
    </Layout>
  );
}

export function getServerSideProps() {
  let dir;
  try {
    dir = fs.readdirSync("./posts/");
  } catch (err) {
    // No posts yet
    return [];
  }
  const posts = dir
    .filter((file) => path.extname(file) === ".md")
    .map((file) => {
      const postContent = fs.readFileSync(
        `./posts/${file}`,
        "utf8",
      );
      const { data, content } = matter(postContent);

      if (data.published === false) {
        return null;
      }

      return {
        ...data,
        body: content,
        title: data.title.replace(" ", " "),
      };
    })
    .filter(Boolean);
  return { props: { posts: posts } };
}
