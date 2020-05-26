import Head from 'next/head'
import Link from 'next/link'
export default function(){
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                <a className="logoText" href="#">
                    Puuwto
                    <span>.</span>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="menuUl">
                        <li className="menuLi active">
                            <Link href="/">
                                <a>Home</a>
                            </Link>
                        </li>
                        <li className="menuLi ">
                            <Link href="/blog">
                                <a>Blog</a>
                            </Link>
                        </li>
                        <li className="menuLi">
                            <Link href="/apps">
                                <a>Apps</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}