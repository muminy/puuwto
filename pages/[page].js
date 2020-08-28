import { useState, useEffect, useContext } from "react";
import Layout from "components/Layout";
import BlogCard from "components/BlogCard";
import { pageData } from "helper/pagination";
import Pagination from "components/Pagination";
import { NotFoundPosts } from "components/Bootstrap";
import LanguageContext from "context/LanguageContext";
import getPosts, { pageArray } from "lib/getPosts";

function Read({ posts, page, pageList }) {
  const { lang } = useContext(LanguageContext);
  const pagePost = pageData(page, posts);
  const [postList, setPostList] = useState(pagePost);
  const [value, setValue] = useState("");
  useEffect(() => {
    if (value) {
      const filter = prevState.filter(
        (item) =>
          item.title
            .toLowerCase()
            .indexOf(value.toLowerCase()) > -1,
      );
      setPostList(filter);
    } else setPostList(pageData(page, posts));
  }, [value]);

  useEffect(() => {
    setPostList(pagePost);
  }, [page]);
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
          <Pagination
            page={parseInt(page)}
            pageList={pageList}
          />
        </>
      ) : (
        <NotFoundPosts />
      )}
    </Layout>
  );
}

export const getStaticProps = ({ params: { page } }) => {
  const posts = getPosts();
  return {
    props: {
      page: parseInt(page),
      posts: posts,
      pageList: pageArray(),
    },
  };
};

export const getStaticPaths = () => {
  return {
    paths: pageArray().map((p) => `/${p}`),
    fallback: false,
  };
};

export default Read;
