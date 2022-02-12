import F from "@/constants/styles";
import classNames from "classnames";
import React from "react";
import styles from "./style.module.css";

export default function Note({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={classNames(styles.note, className)} {...props}>
      <h1 className="font-semibold">Not Bırak</h1>
      <p className="text-sm text-gray-500 mb-5">
        Tüm yapıcı eliştirilerinizi bu postun altında bekliyorum
      </p>

      <button className="bg-gray-900  mb-1 text-gray-100 px-3.5 py-2.5 rounded-xl w-full text-sm font-semibold">
        Eleştir
      </button>
      <div className="text-sm  text-gray-500">Toplam 14 eleştiri mevcut</div>
    </div>
  );
}
