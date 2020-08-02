import Layout from "../../../components/Layout";
import ArticleComponent from "../../../components/Article";
import fetch from "isomorphic-unfetch";
import { api } from "../../../helper/api";
export default function BlogContent(props) {
  return (
    <Layout>
      <ArticleComponent {...props} />
    </Layout>
  );
}

BlogContent.getInitialProps = async ({ query }) => {
  const apid = await fetch(`${api}/getBlogs`);
  const jsonData = await apid.json();
  return {
    posts: jsonData.filter(
      (item) =>
        item.id === parseInt(query.id) &&
        item.slug === query.slug,
    )[0],
  };
};
