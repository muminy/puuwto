import fetch from "isomorphic-unfetch";
import Header from '../../components/Header';
import { Api } from '../../constant/Api';
import ReactMarkdown from 'react-markdown';

const Article = ({ content }) => {
  return (
    <div>
      <Header />
      <div className="article_main">
        <header>
          <div className="title">{content.title}</div>
          <time>Friday, May 1st 2020 (about 1 month ago)</time>
        </header>
        <div className="content">
          <ReactMarkdown source={content.content} />
        </div>
      </div>
    </div>
  )
}

Article.getInitialProps = async ({ req, query }) => {
  const res = await fetch(Api + `/blog/${query.article}`);
  const json = await res.json();
  return { content: json.content };
}

export default Article;