import { useRouter } from "next/router";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { getPosts } from "../../../constant/getPosts";
import { CagegoryList } from "../../../constant/CagegoryList";
import Head from "next/head";
import BlogCard from "../../../components/BlogCard";
import Layout from "../../../components/Layout";
import Pagination from "../../../components/pagination";
import CategoryHeader from "../../../components/CategoryHeader";

const Category = ({ info }) => {
  const router = useRouter();
  const posts = getPosts().filter(
    (article) => article.kategori === router.query.tag,
  );

  return (
    <Layout title={`${info.id}`}>
      <CategoryHeader id={info.id} info={info.info} />
      <div className="blogs_all">
        {posts.slice(0, process.env.PER_PAGE).map((item) => (
          <BlogCard
            key={item.slug}
            title={item.title}
            info={item.info}
            slug={item.slug}
          />
        ))}
      </div>
      {posts.length > process.env.PER_PAGE ? (
        <Pagination tag={router.query.tag} data={posts} />
      ) : null}
    </Layout>
  );
};

Category.getInitialProps = ({ req, query }) => {
  const CateInfo = CagegoryList().find(
    (category) => category.slug === query.tag,
  );
  return { info: CateInfo };
};

export default Category;
