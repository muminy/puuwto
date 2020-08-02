import Link from "next/link";
import { LogoIcon } from "../constant/icons";
import { siteConfig } from "../constant/config";

export default function () {
  return (
    <Link href="/">
      <a className="site_link">
        <LogoIcon sw={2} size={30} color="#000" />
        <span>{siteConfig.name}</span>
      </a>
    </Link>
  );
}
