import style from "./style.module.css";
import MarkdownToJsx from "markdown-to-jsx";
import Image from "./components/Image";
import Code from "./components/Code";

export interface Props {
  content: string;
}

const overrides = {
  img: { component: (props: any) => <Image {...props} /> },
  code: {
    component: (props: any) => (
      <Code
        {...(props?.className && {
          language: props?.className.replace("lang-", ""),
        })}
        content={props.children}
      />
    ),
  },
};

export default function Markdown(props: Props) {
  return (
    <MarkdownToJsx
      options={{
        overrides,
      }}
      className={style.content}
    >
      {props.content}
    </MarkdownToJsx>
  );
}
