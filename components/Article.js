import ReactMarkdown from 'react-markdown';

export default function ({title, content}) {
    return (
        <div className="article_main">
            <header>
                <div className="title">{title}</div>
                <time>Friday, May 1st 2020 (about 1 month ago)</time>
            </header>
            <div className="content">
                <ReactMarkdown source={content} />
            </div>
        </div>
    )
}