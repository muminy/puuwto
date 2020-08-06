import ReactMarkdown from "react-markdown";
import CodeBlock from "./CodeBlock";
import readingTime from "reading-time";

export default function ArticleComponent({
  title,
  time,
  body,
}) {
  const stats = readingTime(body);
  return (
    <div className="content">
      <header>{title}</header>
      <div className="flex mb48">
        <time>{time}</time>
        <div className="min_read">{stats.text}</div>
      </div>
      <ReactMarkdown
        source={body}
        renderers={{ code: CodeBlock }}
      />
    </div>
  );
}
