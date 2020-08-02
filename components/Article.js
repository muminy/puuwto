import ReactMarkdown from "react-markdown";
import { api } from "helper/api";
import CodeBlock from "./CodeBlock";

export default function ArticleComponent({ posts }) {
  console.log(posts);
  return (
    <div className="content">
      <header>{posts.title}</header>
      <div className="flex jcsb mb48">
        <time>{posts.time}</time>
      </div>
      <ReactMarkdown
        source={posts.body}
        renderers={{ code: CodeBlock }}
      />
    </div>
  );
}
