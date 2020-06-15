import fetch from "isomorphic-unfetch";
import Header from '../../components/Header';
import { Api } from '../../constant/Api';
import ArticleContent from '../../components/Article';
import Footer from "../../components/Footer";
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect } from "react";
import Loading from "../../components/Loading";
const Article = () => {

  const route = useRouter();
  const [content, setContent] = useState(null);
  
  const getContent = () => {
    fetch(Api + '/blog/' + route.query.article)
    .then(responseJson => responseJson.json())
    .then(responseJson => setContent(responseJson.content))
  }

  useEffect(() => {
    getContent()
  }, [])

  return (
    <div>
      <Head>
        <title> | puuwto.com</title>
      </Head>
      <Header />
      {content ? (
        <ArticleContent 
          content={content.content}
          title={content.title} />
      ) : <Loading />}
      <Footer />
    </div>
  )
}
Article.getInitialProps = async ({ query}) => {
  const contentJson = await fetch(Api + '/blog/' + query.article);
  const JsonData = await contentJson.json();
  return { content: JsonData.content}
}
export default Article;