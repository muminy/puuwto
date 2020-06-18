import { CagegoryList } from "../constant/CagegoryList";
import { useState } from "react";
import { getPosts } from "../constant/getPosts";
import BlogCard from "../components/BlogCard";
import Layout from "../components/Layout";
import Categorys from "../components/Categorys";
import Pagination from '../components/pagination'
import { pageData } from "../utils/helper";
const Index = () => {
  const [blogs, setBlogs] = useState(getPosts().slice(0, process.env.PER_PAGE));
  return (
    <Layout title="">
      <Categorys />
      <div className="blogs_all">
        {blogs.map((item) => (
          <BlogCard
            key={item.slug}
            category={item.kategori}
            info={item.info}
            slug={item.slug}
            title={item.title}
          />
        ))}
      </div>
      <Pagination data={getPosts()} page={1} />
    </Layout>
  );
};

export default Index;
