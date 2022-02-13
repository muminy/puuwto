import Post from "@/components/Post";
import { IPost } from "@/types/global";
import style from "./style.module.css";

interface IProps {
  posts: IPost[];
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
