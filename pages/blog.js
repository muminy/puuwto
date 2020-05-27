import Head from 'next/head';
import fetch from "isomorphic-unfetch";
import Header from '../components/Header';
import Container from '../components/Container';
import { Api } from '../constant/Api';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const Blog = () => {

  const [blogs, setBlogs] = useState([]);

  const getBlogs = () => {
    fetch('http://localhost:3000/api/posts')
    .then(data => data.json())
    .then(responseJson => setBlogs(responseJson))
  }

  useEffect(() => {
    getBlogs()
  }, [])

  return (
    <div>
      <Head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossOrigin="anonymous"></link>
        <link rel="stylesheet" href="./custom.css" />
      </Head>
      <Header href="blog" />
      <div className="info_company">
        <Container>
          <div className="blogs">
            <header className="header_blogs">
              <div className="title_blog">Personal <b>Blog</b></div>
              <p>We develop Mobile, Web and desktop applications, and it's free. We use only react, electronjs as frond-end. We use php, nodeJs and pyhton in back-end.</p>
            </header>
          </div>
        </Container>
      </div>
      <Container>
        <div className="blogs_all">
          {blogs.map((item, index) => (
            <div key={index} className="blog-design">
              <Link href={'/blog/' + item.slug}>
                <a>{item.title}</a>
              </Link>
              <p>{item.info}</p>
            </div>
          ))}
        </div>
      </Container>


      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossOrigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossOrigin="anonymous"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossOrigin="anonymous"></script>
    </div>
  )
}

export default Blog;