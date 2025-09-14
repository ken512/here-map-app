"use client";
import React from "react";
import styles from "./Header.module.scss";
import "../../globals.css";

type HeaderProps = {
  children: React.ReactNode;
}

export const HeaderBase: React.FC<HeaderProps> = ({children}) => {
  return (
    <div>
      <h1 className={styles.header_h1}>
        {children}
      </h1>
    </div>
  );
};