import Posts from "@/components/Sections/Posts";
import getPosts from "@/lib/post";
import classNames from "classnames";
import type { NextPage } from "next";

const Home: NextPage = ({ posts }: any) => {
  return (
    <div className={classNames("")}>
      <Posts posts={posts} />

      {/* <div className={classNames(F.paddingX, F.paddingY, "flex border-b")}>
        <Note className="!mb-0" />
      </div> */}
    </div>
  );
};
export async function getStaticProps() {
  const posts = getPosts();
  // If you request this page with the preview mode cookies set:
  //
  // - context.preview will be true
  // - context.previewData will be the same as
  //   the argument used for `setPreviewData`.
  return {
    props: { posts },
  };
}
export default Home;
