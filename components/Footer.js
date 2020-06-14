import { GithubIcon, TwitterIcon } from '../constant/Icons';
import Flex from './Flex';
import Link from 'next/link';

const Footer = ({posts}) => {

    return (
        <div className="footer">
            <Flex>
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
            </Flex>
        </div>
    )
}

export default Footer;