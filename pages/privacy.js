import ReactMarkdown from 'react-markdown';
import Header from '../components/Header';
import Footer from '../components/Footer';
export default function privacy() {
    return (
        <div className="privacy">
            <Header />
            <div className="article_main">
                <header>
                    <div className="title">Privacy Policy</div>
                </header>
                <div className="content">
                    <ReactMarkdown source={require('../blog/privacy.md').default} />
                    <p className="infor">puuwto</p>
                    <p className="infor">mmnyldrm61@gmail.com</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}