import F from "@/constants/styles";
import classNames from "classnames";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className={classNames("flex space-x-10", F.paddingX)}>
      tailwind ui page
    </div>
  );
};

export default Home;
