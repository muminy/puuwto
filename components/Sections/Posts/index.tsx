import Post from "@/components/Post";
import F from "@/constants/styles";
import { IPosts } from "@/types/global";
import classNames from "classnames";
import style from "./style.module.css";

interface IProps {
  posts: IPosts[];
}

export default function Posts(props: IProps) {
  return (
    <div className={style.posts}>
      {props.posts.map((item) => (
        <Post {...item} key={item.id} />
      ))}
    </div>
  );
}
