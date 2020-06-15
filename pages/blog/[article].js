import fetch from "isomorphic-unfetch";
import Header from "../../components/Header";
import { Api } from "../../constant/Api";
import ArticleContent from "../../components/Article";
import Footer from "../../components/Footer";
import Head from "next/head";
import { useRouter } from "next/router";
import { getPosts } from "../../constant/getPosts";
import Layout from "../../components/Layout";

const Article = () => {
  const router = useRouter();
  const content = getPosts().find(
    (posts) => posts.slug === router.query.article
  );
  return (
    <Layout title={content?.title}>
      <ArticleContent
        content={content?.content}
        title={content?.title}
      />
    </Layout>
  );
};

export default Article;
