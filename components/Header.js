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
            <div className="menus">
                <Link href={{ pathname: '/' }}><a className="menu_link"> Anasayfa </a></Link>
                <Link href={{ pathname: '/' }}><a className="menu_link"> Uygulamalar </a></Link>
            </div>
        </div>
    )
}