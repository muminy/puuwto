import { ISeoMeta } from "./seo";

export interface ILayout {
  seo?: ISeoMeta;
  children?: React.ReactNode;
  className?: string;
}
