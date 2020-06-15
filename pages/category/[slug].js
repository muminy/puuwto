import { useRouter } from "next/router";
import Header from '../../components/Header';
import { useState } from 'react';
import Link from 'next/link';
import Footer from '../../components/Footer';
import { getPosts } from "../../constant/getPosts";
import { CagegoryList } from "../../constant/CagegoryList";

const Category = ({info}) => {
    

  const router = useRouter();  
  const posts = getPosts().filter(article => article.kategori === router.query.slug);

  return (
    <div>
      <Header href="blog" />
      <div className="info_company">
        <header className="header_blogs">
          <div className="title_blog mb_custom">{info[0].id}</div>
          <p>{info[0].info}</p>
        </header>
      </div>
      <div className="blogs_all">
        {posts.map((item, index) => (
          <div key={index} className="blog-design">
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

Category.getInitialProps = ({ req, query }) => {
    
    const CateInfo = CagegoryList().filter(category => category.slug === query.slug);
    return { info: CateInfo };
}

  
export default Category;