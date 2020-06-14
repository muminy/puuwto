import { GithubIcon, TwitterIcon } from '../constant/Icons';
import Link from 'next/link';

const Footer = ({ posts }) => {

    return (
        <div className="footer">
            © 2020 puuwto
            <ul className="links">
                <li>
                    <Link href={'https://github.com/vasdeJ'}>
                        <a className="menu_link"> <GithubIcon size={20} color="#111" /></a>
                    </Link>
                </li>
                <li>
                    <Link href={'https://twitter.com/mmnyldrm'}>
                        <a className="menu_link"> <TwitterIcon size={20} color="#111" /></a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Footer;