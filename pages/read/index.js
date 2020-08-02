import Layout from "components/Layout";
import BlogCard from "components/BlogCard";
import { api } from "helper/api";
import fetch from "isomorphic-unfetch";
import { useState, useEffect } from "react";
import { pages } from "helper/pagination";
import { LeftArrow, RightArrow } from "constant/icons";
import Pagination from "components/Pagination";
export default function Read({ posts }) {
  const [postList, setPostList] = useState(posts);
  const [value, setValue] = useState("");
  const [pageList, setPages] = useState(pages(postList));

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
    } else setPostList(posts);
  }, [value]);

  return (
    <Layout title="">
      <div className="bigger_header">
        Blog
        <p>
          Günlük, kod ve doğandan haberleri sizlerle
          paylaşıyorum. Hergün yeni şeyler, yeni
          teknolojiler öğrenmeye çalışıyorum.
        </p>
      </div>
      <div className="searchBlogs">
        <input
          value={value}
          onChange={(text) => setValue(text.target.value)}
          placeholder="Yazı, blog ara"
        />
      </div>
      <div className="blogs">
        {postList.map((item) => (
          <BlogCard key={item.id} {...item} />
        ))}
      </div>
      <div className="pagination flex">
        <div className="left_go">
          <LeftArrow size={25} sw={3} />
        </div>
        <div className="list_i flex">
          <Pagination pageList={pageList} />
        </div>
        <div className="right_go">
          <RightArrow size={25} sw={3} />
        </div>
      </div>
    </Layout>
  );
}

Read.getInitialProps = async () => {
  const apid = await fetch(`${api}/getBlogs`);
  const jsonData = await apid.json();
  return { posts: jsonData };
};
