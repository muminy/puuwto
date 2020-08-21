import Layout from "components/Layout";
import ArticleComponent from "components/Article";
import { useContext, useState, useEffect } from "react";
import getPosts from "lib/getPosts";

export default function BlogContent(props) {
  console.log(props);
  return (
    <Layout>
      <ArticleComponent {...props} />
    </Layout>
  );
}

export const getStaticProps = ({
  params: { slug, id },
}) => {
  const posts = getPosts();
  const postIndex = posts.findIndex(
    (p) => p.slug === slug && p.id === parseInt(id),
  );
  const post = posts[postIndex];

  return {
    props: {
      previous: posts[postIndex - 1] || null,
      next: posts[postIndex + 1] || null,
      ...post,
    },
  };
};

export const getStaticPaths = () => {
  return {
    paths: getPosts().map((p) => `/blog/${p.id}/${p.slug}`),
    fallback: false,
  };
};
