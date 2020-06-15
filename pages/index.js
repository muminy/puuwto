import { CagegoryList } from '../constant/CagegoryList'
import Header from '../components/Header';
import { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Footer from '../components/Footer';
import { getPosts } from "../constant/getPosts";
import BlogCard from '../components/BlogCard';

const Index = () => {

  const [blogs, setBlogs] = useState(getPosts());

  return (
    <div>
      <Head>
        <title>puuwto.com</title>
      </Head>
      <Header href="blog" />
      <div className="info_company">
        <header className="header_blogs">
          <div className="title_blog">Ne aramıştın ?</div>
          <div className="kList">
            {CagegoryList().map((item, index) => {
              return (
                <Link 
                  href='/category/[slug]'
                  as={'/category/' + item.slug} 
                  key={item.id}>
                  <a className="category_items">{item.id}</a>
                </Link>
              )
            })}
          </div>
        </header>
      </div>
      <div className="blogs_all">
        {blogs.map((item, index) => (
          <BlogCard 
            key={item.slug}
            category={item.kategori}
            info={item.info}
            slug={item.slug}
            title={item.title}
          />
        ))}
      </div>
      <Footer />
    </div>
  )
}

export default Index;