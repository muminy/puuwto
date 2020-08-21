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
import getPosts from "lib/getPosts";

function Read({ posts, page, pageList }) {
  const { lang } = useContext(LanguageContext);
  const [postList, setPostList] = useState(
    pageData(page, posts),
  );
  const [value, setValue] = useState("");
  useEffect(() => {
    if (value) {
      setPostList((prevState) => {
        const filter = posts.filter(
          (item) =>
            item.title
              .toLowerCase()
              .indexOf(value.toLowerCase()) > -1,
        );
        return [...filter];
      });
    } else setPostList(pageData(page, posts));
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

export const getStaticProps = () => {
  const posts = getPosts();
  const pageArray = pages([]);
  return {
    props: {
      page: 1,
      posts: posts,
      pageList: pageArray,
    },
  };
};

export default Read;
