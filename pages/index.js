import fs from "fs";
import matter from "gray-matter";
import path from "path";
import Layout from "components/Layout";

export default function (props) {
  console.log(props);
  return <Layout>sad</Layout>;
}

export function getStaticProps(context) {
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
    .filter(Boolean);
  return { props: { posts: posts } };
}
