import fetch from "isomorphic-unfetch";
import Header from '../components/Header';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Api } from '../constant/Api';
import Footer from '../components/Footer';

const Index = () => {

  const [blogs, setBlogs] = useState([]);
  const [category, setCategory] = useState([
    {id: 'ReactJs'},
    {id: 'VueJs'},
    {id: 'ElectronJs'}
  ])
  const getBlogs = () => {
    fetch(Api + '/blog/posts')
      .then(data => data.json())
      .then(responseJson => setBlogs(responseJson))
  }

  useEffect(() => {
    getBlogs()
  }, [])

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