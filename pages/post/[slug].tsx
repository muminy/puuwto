import Container from "@/components/Container";
import Markdown from "@/components/Markdown";
import PostTitle from "@/components/Post/Title";
import getPosts, { getPost } from "@/lib/post";
import { IPost } from "@/types/global";
import classNames from "classnames";
import type { GetStaticPropsContext, NextPage } from "next";

interface Props {
  post: IPost;
}

const PostContent: NextPage<Props> = ({ post }) => {
  return (
    <div className={classNames("border-t py-10")}>
      <Container>
        <PostTitle>{post.title}</PostTitle>
        <Markdown content={post.body} />
        {/* <div className={classNames(F.paddingX, F.paddingY, "flex border-b")}>
        <Note className="!mb-0" />
      </div> */}
      </Container>
    </div>
  );
};

export async function getStaticProps(context: GetStaticPropsContext) {
  const post = getPost(context.params?.slug as string);
  // If you request this page with the preview mode cookies set:
  //
  // - context.preview will be true
  // - context.previewData will be the same as
  //   the argument used for `setPreviewData`.
  return {
    props: { post },
  };
}

export async function getStaticPaths() {
  const posts = getPosts();
  return {
    paths: posts.map((item) => `/post/${item.slug}-${item.id}`),
    fallback: false, // false or 'blocking'
  };
}

export default PostContent;
