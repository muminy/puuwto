import Layout from "components/Layout";
import BlogCard from "components/BlogCard";
import { api } from "helper/api";
import fetch from "isomorphic-unfetch";
import { useState, useEffect, useContext } from "react";
import { pages, pageData } from "helper/pagination";
import { LeftArrow, RightArrow } from "constant/icons";
import Pagination from "components/Pagination";
import Link from "next/link";
import { NotFoundPosts } from "components/Bootstrap";
import { language } from "constant/language";
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

Read.getInitialProps = async () => {
  const apid = await fetch(`${api}/getBlogs`);
  const jsonData = await apid.json();
  return { posts: jsonData };
};
