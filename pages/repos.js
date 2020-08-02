import Link from "next/link";
import { useContext, useEffect } from "react";
import fetch from "isomorphic-unfetch";
import Layout from "../components/Layout";
import LanguageContext from "../context/LanguageContext";
import GithubRepos from "../components/GithubRepos";
import { siteConfig } from "../constant/config";

export default function Home({ reposes }) {
  const { lang } = useContext(LanguageContext);
  return (
    <Layout>
      <div className="bigger_header">
        {lang.repository.what_you_want}
        <p>{lang.repository.r_index}</p>
        <div className="flex lh20">
          <Link href="/">
            <a className="soru_sor">
              {lang.repository.ask_me}
            </a>
          </Link>
          <Link href="/">
            <a className="soru_sor">
              {lang.repository.give_me_a_job}
            </a>
          </Link>
        </div>
      </div>
      <header className="header_title">
        My own Projects
      </header>
      <GithubRepos reposes={reposes} />
    </Layout>
  );
}

Home.getInitialProps = async () => {
  const repos = await fetch(
    "https://api.github.com/users/muminy/repos",
    {
      method: "GET",
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
    },
  );
  const reposJson = await repos.json();
  return {
    reposes: reposJson.filter(
      (item) =>
        !item.fork &&
        item.name !== siteConfig.github.username,
    ),
  };
};
