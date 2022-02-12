import classNames from "classnames";
import React from "react";

export default function Container(props: React.HTMLProps<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={classNames(
        "2xl:max-w-5xl xl:max-w-7xl mx-auto",
        props.className
      )}
    />
  );
}
