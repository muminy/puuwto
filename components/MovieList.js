import { StarIcon } from "constant/icons";
import Link from "next/link";

export default function ({
  title,
  description,
  image,
  imbd,
}) {
  return (
    <div className="movie_list_pro flex border">
      <img src={image} alt={title} />
      <div className="movie_content ml-10">
        <div>
          <Link href="/">
            <a className="link_movie">{title}</a>
          </Link>
          <p>{description}</p>
        </div>
        <div className="imbd">
          <StarIcon size={24} />
          <span>{imbd}</span>
        </div>
      </div>
    </div>
  );
}
