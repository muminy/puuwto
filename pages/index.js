import { CagegoryList } from '../constant/CagegoryList'
import Header from '../components/Header';
import { useState } from 'react';
import Link from 'next/link';
import Footer from '../components/Footer';
import { getPosts } from "../constant/getPosts";

const Index = () => {

  const [blogs, setBlogs] = useState(getPosts());

  return (
    <div>
      <Header href="blog" />
      <div className="info_company">
        <header className="header_blogs">
          <div className="title_blog">Ne aramıştın ?</div>
          <div className="kList">
            {CagegoryList().map((item, index) => <Link href={{pathname: '/category/' + item.slug}} key={item.id}><a className="category_items">{item.id}</a></Link>)}
          </div>
        </header>
      </div>
      <div className="blogs_all">
        {blogs.map((item, index) => (
          <div key={index} className="blog-design">
            <Link href={{pathname: '/category/'+ item.kategori}}>
              <a className="kate"># {item.kategori}</a>
            </Link>
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