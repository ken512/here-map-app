"use client";
import React from "react";
import { HeaderBase } from "./HeaderBase";
import { FaCarAlt } from "react-icons/fa";
import styles from "./Header.module.scss";
import "../../globals.css";

export const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <FaCarAlt className={styles.icon}/>
      <HeaderBase>交通規制をルート案内</HeaderBase>
    </div>
  );
};
