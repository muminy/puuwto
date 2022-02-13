import SyntaxHighlighter from "react-syntax-highlighter";
import { vs } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface Props {
  language: string;
  content: string;
}
export default function Code({ language, content }: Props) {
  return (
    <SyntaxHighlighter
      language={language}
      customStyle={{
        position: "relative",
        display: "flex",
        outlineOffset: "2px",
        overflow: "auto",
        marginLeft: "-32px",
        marginRight: "-32px",
        padding: "32px",
        background: "#f5f6f9",
        color: "red",
        function: "red",
        borderRadius: "6px",
        fontSize: "17px",
        fontWeight: "600",
      }}
      style={vs}
    >
      {content}
    </SyntaxHighlighter>
  );
}
