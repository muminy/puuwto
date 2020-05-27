import Head from 'next/head'
import Link from 'next/link'
export default function({href}){
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
                        <li className={href === 'home' ? 'menuLi active' : 'menuLi'}>
                            <Link href="/">
                                <a className="menuA">Home</a>
                            </Link>
                        </li>
                        <li className={href === 'blog' ? 'menuLi active' : 'menuLi'}>
                            <Link href="/blog">
                                <a className="menuA">Blog</a>
                            </Link>
                        </li>
                        <li className={href === 'home' ? 'menuLi active' : 'menuLi'}>
                            <Link href="/apps">
                                <a className="menuA">Apps</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}