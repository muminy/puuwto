import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { useContext } from "react";
import ThemeContext from "context/ThemeContext";
import {
  vsDark,
  githubLight,
} from "helper/SyntaxHighligherStyles";

const CodeBlock = ({ language, value }) => {
  return (
    <SyntaxHighlighter
      language={language}
      style={githubLight}
    >
      {value}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
