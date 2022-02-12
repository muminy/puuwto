import cn from "classnames";
import Seo from "../Seo";

import { ILayout } from "@/types/layout";
import Header from "../Header";
import Sidebar from "../Sidebar";

export default function Layout(props: ILayout) {
  const { seo, children, className } = props;

  return (
    <div className={cn("min-h-screen xl:flex block", className)}>
      <Seo {...seo} />
      <Sidebar />
      <main className={cn("w-full xl:ml-[140px] ml-0 xl:pt-0 pt-[90px]")}>
        <Header />
        {children}
      </main>
    </div>
  );
}
