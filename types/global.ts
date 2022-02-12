import React from "react";

export interface ISvgIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

export interface MenuLink {
  url: string;
  title: string;
}

export interface IPosts {
  id: string;
  slug: string;
  title: string;
  body: string | null;
  description?: string;
}
