import { IPosts } from "@/types/global";
import Link from "next/link";

export default function Post(props: IPosts) {
  return (
    <Link href={`/post/${props.slug}-${props.id}`}>
      <a className="group 2xl:w-2/12 xl:w-3/12 lg:w-4/12 md:w-6/12 w-full duration-300 hover:bg-gray-50 border-r border-b p-6">
        <h3 className="mb-3 font-medium duration-100 ">{props.title}</h3>
        <p className="text-sm font-normal mb-2 text-gray-400">
          {props.description}
        </p>

        <button className="text-sm font-medium text-gray-500 duration-300 group-hover:text-orange-500">
          Devamını Gör
        </button>
      </a>
    </Link>
  );
}
