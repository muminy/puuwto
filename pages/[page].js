import { useState, useEffect, useContext } from "react";
import Layout from "components/Layout";
import BlogCard from "components/BlogCard";
import { pages, pageData } from "helper/pagination";
import Pagination from "components/Pagination";
import { NotFoundPosts } from "components/Bootstrap";
import LanguageContext from "context/LanguageContext";
import getPosts from "lib/getPosts";

function Read({ page }) {
  const { lang, posts } = useContext(LanguageContext);
  const [postList, setPostList] = useState(
    pageData(page, posts),
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
Read.getInitialProps = ({ query }) => {
  const posts = getPosts();
  return { posts: getPosts(), page: parseInt(query.page) };
};

export default Read;
