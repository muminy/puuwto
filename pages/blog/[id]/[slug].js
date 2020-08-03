import Layout from "components/Layout";
import getPosts from "lib/getPosts";
import ArticleComponent from "components/Article";
export default function BlogContent(props) {
  return (
    <Layout>
      <ArticleComponent posts={props.posts} />
    </Layout>
  );
}
export function getStaticPaths() {
  return {
    paths: getPosts().map((p) => `/blog/${p.id}/${p.slug}`),
    fallback: true,
  };
}

export function getStaticProps({ params: { slug, id } }) {
  const posts = getPosts();
  const filterPosts = posts.filter(
    (item) =>
      item.id === parseInt(id) && item.slug === slug,
  )[0];
  return {
    props: { posts: filterPosts },
  };
}
