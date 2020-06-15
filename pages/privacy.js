import ReactMarkdown from "react-markdown";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
export default function privacy() {
  return (
    <Layout title="Privacy Policy | puuwto.com">
      <div className="article_main">
        <header>
          <div className="title">
            Privacy Policy
          </div>
        </header>
        <div className="content">
          <ReactMarkdown
            source={
              require("../blog/privacy.md")
                .default
            }
          />
          <p className="infor">puuwto</p>
          <p className="infor">
            mmnyldrm61@gmail.com
          </p>
        </div>
      </div>
    </Layout>
  );
}
