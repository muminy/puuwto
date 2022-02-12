import Container from "@/components/Container";
import Note from "@/components/Note";
import Posts from "@/components/Sections/Posts";
import F from "@/constants/styles";
import getPosts from "@/lib/post";
import { IPosts } from "@/types/global";
import classNames from "classnames";
import type { GetServerSidePropsContext, NextPage } from "next";

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

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const posts = getPosts();

  return {
    props: {
      posts,
    }, // will be passed to the page component as props
  };
}
export default Home;
