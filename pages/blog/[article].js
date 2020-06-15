import fetch from "isomorphic-unfetch";
import Header from '../../components/Header';
import { Api } from '../../constant/Api';
import ArticleContent from '../../components/Article';
import Footer from "../../components/Footer";
import Head from 'next/head';

const Article = ({content}) => {
  return (
    <div>
      <Head>
        <title> {content.title} | puuwto.com</title>
      </Head>
      <Header />
      <ArticleContent 
        content={content.content}
        title={content.title} />
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