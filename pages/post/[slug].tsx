import Container from "@/components/Container";
import Posts from "@/components/Sections/Posts";
import getPosts, { getPost } from "@/lib/post";
import { IPosts } from "@/types/global";
import classNames from "classnames";
import type {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetStaticPaths,
  GetStaticProps,
  NextPage,
} from "next";

const PostContent: NextPage = ({ post, slug }: any) => {
  console.log(post, slug);
  return (
    <Container className={classNames("")}>
      {/* <Posts posts={posts} /> */}
      {post.body}
      {/* <div className={classNames(F.paddingX, F.paddingY, "flex border-b")}>
        <Note className="!mb-0" />
      </div> */}
    </Container>
  );
};

interface SSProps extends GetServerSidePropsContext {
  query: {
    slug: string;
  };
}

export async function getServerSideProps(context: SSProps) {
  const post = getPost(context.query.slug);

  if (post) {
    return {
      props: {
        post,
        slug: context.query.slug,
      }, // will be passed to the page component as props
    };
  }

  return { notFound: true };
}

export default PostContent;
