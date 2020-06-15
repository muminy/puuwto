import { GithubIcon, TwitterIcon } from "../constant/Icons";
import Link from "next/link";

const Footer = ({ posts }) => {
  return (
    <div className="footer">
      © 2020 puuwtoş
      <ul className="links">
        <li>
          <a
            href="https://github.com/vasdeJ"
            className="menu_link"
          >
            <GithubIcon size={20} color="#111" />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/mmnyldrm"
            className="menu_link"
          >
            <TwitterIcon size={20} color="#111" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
