import Link from 'next/link'

export default function ({ href }) {
    return (
        <div className="header">
            <Link href={{ pathname: '/' }}>
                <a className="logoText">
                    puuw
                    <span>to</span>
                    .
                </a>
            </Link>
            <ul className="links">
                <li>
                    <Link href={{ pathname: '/' }}><a className="menu_link"> Blog </a></Link>
                </li>
                <li><Link href={{ pathname: '/' }}><a className="menu_link"> Uygulamalar </a></Link></li>
            </ul>
        </div>
    )
}