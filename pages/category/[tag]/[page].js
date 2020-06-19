import { getPosts } from "../../../constant/getPosts";
import { CagegoryList } from "../../../constant/CagegoryList";
import BlogCard from "../../../components/BlogCard";
import Layout from "../../../components/Layout";
import { pageData } from "../../../utils/helper";
import Pagination from "../../../components/pagination";
import { useEffect, useState } from "react";
import CategoryHeader from "../../../components/CategoryHeader";

const CategoryPage = ({ query, info }) => {
  const page = parseInt(query.page);
  const [totalData, setTotalData] = useState(
    getPosts().filter(
      (rows) => rows.kategori === query.tag,
    ),
  );
  const [posts, setPosts] = useState(
    pageData(page, totalData),
  );
  useEffect(() => {
    setPosts(
      pageData(
        page,
        getPosts().filter(
          (rows) => rows.kategori === query.tag,
        ),
      ),
    );
  }, [query.page]);

  return (
    <Layout title={`${info.id} - ${page}`}>
      <CategoryHeader id={info.id} info={info.info} />
      <div className="blogs_all">
        {posts.map((item) => (
          <BlogCard
            key={item.slug}
            info={item.info}
            slug={item.slug}
            title={item.title}
          />
        ))}
      </div>
      {totalData.length > process.env.PER_PAGE ? (
        <Pagination
          data={totalData}
          tag={query.tag}
          pagenation={page}
        />
      ) : null}
    </Layout>
  );
};

CategoryPage.getInitialProps = ({ query }) => {
  const CateInfo = CagegoryList().find(
    (category) => category.slug === query.tag,
  );
  return { query: query, info: CateInfo};
};

export default CategoryPage;
