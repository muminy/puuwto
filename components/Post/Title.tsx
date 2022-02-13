import classNames from "classnames";
import React from "react";

export default function PostTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={classNames(className, "mb-14 text-4xl font-semibold")}
    />
  );
}
