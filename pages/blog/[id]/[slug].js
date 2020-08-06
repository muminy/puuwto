import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Layout from "components/Layout";
import ArticleComponent from "components/Article";
import { useContext, useState } from "react";
import LanguageContext from "context/LanguageContext";
export default function BlogContent({ slug, id }) {
  const { posts } = useContext(LanguageContext);
  const [article, setArticle] = useState(
    posts.filter(
      (item) =>
        item.slug === slug && item.id === parseInt(id),
    )[0],
  );
  return (
    <Layout>
      <ArticleComponent {...article} />
    </Layout>
  );
}

BlogContent.getInitialProps = ({ query }) => {
  const { id, slug } = query;
  return { slug, id };
};
