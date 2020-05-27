import Head from 'next/head';
import fetch from "isomorphic-unfetch";
import Header from '../../components/Header';
import Container from '../../components/Container';
import { Api } from '../../constant/Api';
import Router from 'next/router';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';
import { BackIcon } from '../../constant/Icons';
const Article = ({content}) => {

  
  
  return (
    <div>
      <Head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossOrigin="anonymous"></link>
        <link rel="stylesheet" href="../custom.css" />
      </Head>
      <Container>
        <div className="goBack">
          <Link href="/blog">
            <a className="geriDon">
              <BackIcon size={25} color="#34c470" />
              Geri dön
            </a>
          </Link>
        </div>
        <div className="article_main">
          <header>{content.title}</header>
          <div className="content">
            <ReactMarkdown source={content.content} />
          </div>
        </div>
      </Container>

      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossOrigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossOrigin="anonymous"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossOrigin="anonymous"></script>
    </div>
  )
}

Article.getInitialProps = async ({ req, query }) => {
  const res = await fetch(`https://puuwto.com/api/${query.article}`);
  const json = await res.json();
  return { content: json.content };
}

export default Article;