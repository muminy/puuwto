import { Container, Row, Col } from "./Bootstrap";
import SiteLogo from "./SiteLogo";
import { useContext } from "react";
import ThemeContext from "context/ThemeContext";
import LanguageContext from "context/LanguageContext";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";
import {
  GithubIcon,
  TwitterIcon,
  Linkedin,
} from "constant/icons";
import Link from "next/link";

export default function ({ opacity }) {
  const pathname = useRouter().pathname;
  return (
    <Container className={`footer`}>
      <div className="flex">
        <div className="flex social_list">
          <a
            href="https://github.com/muminy"
            className="list_item"
            target="__blank"
          >
            <GithubIcon size={25} color="#111" />
          </a>
          <a
            href="https://twitter.com/muminy61"
            className="list_item"
            target="__blank"
          >
            <TwitterIcon size={25} color="#111" />
          </a>
          <a
            href="https://linkedin.com/in/muminy"
            className="list_item"
            target="__blank"
          >
            <Linkedin size={25} color="#111" />
          </a>
        </div>
        <div className="source_code">
          <a
            href="https://github.com/muminy/puuwto"
            className="aroot"
          >
            Kodu incele >
          </a>
        </div>
      </div>
    </Container>
  );
}
