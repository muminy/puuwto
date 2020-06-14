import fetch from "isomorphic-unfetch";
import Header from '../components/Header';
import { useState } from 'react';
import Link from 'next/link';
import Footer from '../components/Footer';
import { getPosts } from "../constant/getPosts";

const Index = () => {

  const [blogs, setBlogs] = useState(getPosts());
  const [category, setCategory] = useState([
    {id: 'ReactJs'},
    {id: 'VueJs'},
    {id: 'ElectronJs'}
  ])

  return (
    <div>
      <Header href="blog" />
      <div className="info_company">
        <header className="header_blogs">
          <div className="title_blog">Ne aramıştın ?</div>
          <div className="kList">
            {category.map((item, index) => <div key={item.id} className="category_items">{item.id}</div>)}
          </div>
        </header>
      </div>
      <div className="blogs_all">
        {blogs.map((item, index) => (
          <div key={index} className="blog-design">
            <div className="kate"># ReactJs</div>
            <Link href={'/blog/' + item.slug}>
              <a>{item.title}</a>
            </Link>
            <p>{item.info}</p>
            <time>Monday, May 11th 2020 (about 1 month ago)</time>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  )
}

export default Index;