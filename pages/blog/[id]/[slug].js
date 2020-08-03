import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Layout from "components/Layout";
import ArticleComponent from "components/Article";
export default function BlogContent(props) {
  console.log(props);
  return (
    <Layout>
      <ArticleComponent {...props} />
    </Layout>
  );
}

export function getServerSideProps({ query }) {
  let dir;
  try {
    dir = fs.readdirSync("./posts/");
  } catch (err) {
    // No posts yet
    return [];
  }
  const posts = dir
    .filter((file) => path.extname(file) === ".md")
    .map((file) => {
      const postContent = fs.readFileSync(
        `./posts/${file}`,
        "utf8",
      );
      const { data, content } = matter(postContent);

      if (data.published === false) {
        return null;
      }

      return {
        ...data,
        body: content,
        title: data.title.replace(" ", " "),
      };
    })
    .filter(
      (item) =>
        item.slug === query.slug &&
        item.id === parseInt(query.id),
    )[0];
  return { props: { posts } };
}
