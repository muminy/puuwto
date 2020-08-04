import ReactMarkdown from "react-markdown";
import { api } from "helper/api";
import CodeBlock from "./CodeBlock";

export default function ArticleComponent({
  title,
  time,
  body,
}) {
  return (
    <div className="content">
      <header>{title}</header>
      <div className="flex jcsb mb48">
        <time>{time}</time>
      </div>
      <ReactMarkdown
        source={body}
        renderers={{ code: CodeBlock }}
      />
    </div>
  );
}
