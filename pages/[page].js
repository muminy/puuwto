import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import { getPosts } from "../constant/getPosts";
import Categorys from "../components/Categorys";
import Pagination from '../components/pagination'
import BlogCard from "../components/BlogCard";
import { useRouter } from 'next/router';
import { pageData } from "../utils/helper";

export default function Page() {
  const page = parseInt(useRouter().query.page);
  const [data, setData] = useState(pageData(page, getPosts()))

  useEffect(() => {
    setData(pageData(page, getPosts()))
  }, [page])

  return (
    <Layout title={"Sayfa " + page}>
      <Categorys />
      <div className="blogs_all">
        {data.map((item) => (
          <BlogCard
            key={item.slug}
            category={item.kategori}
            info={item.info}
            slug={item.slug}
            title={item.title}
          />
        ))}
      </div>
      <Pagination data={getPosts()} pagenation={page} />
    </Layout>
  );
}