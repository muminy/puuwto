import Layout from "../components/Layout";
import BlogCard from "../components/BlogCard";
import { api } from "../helper/api";
import fetch from "isomorphic-unfetch";
import { useState, useEffect, useContext } from "react";
import {
  pageCounter,
  pageData,
} from "../helper/pagination";
import Sayfalama from "../components/Sayfalama";
import { NotFoundPosts } from "../components/Bootstrap";
import LanguageContext from "../context/LanguageContext";

export default function Read({ posts, number }) {
  const { lang } = useContext(LanguageContext);
  const [postList, setPostList] = useState(
    pageData(number, posts),
  );
  const [value, setValue] = useState("");
  const [pageList, setPages] = useState(pageCounter(posts));

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
    } else setPostList(pageData(number, posts));
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
          <Sayfalama
            number={parseInt(number)}
            pageList={pageList}
          />
        </>
      ) : (
        <NotFoundPosts />
      )}
    </Layout>
  );
}

Read.getInitialProps = async ({ query }) => {
  const apid = await fetch(`${api}/getBlogs`);
  const jsonData = await apid.json();
  return { posts: jsonData, number: query.number };
};
