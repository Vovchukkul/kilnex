import React, { useState } from "react";
import styles from "./Burger.module.scss";

type Props = {
    isOpen: boolean,
    click: () => void
}

export const Burger: React.FC<Props> = ({ isOpen, click }) => {
  const toggleMenu = () => {
    click()
  };

  return (
    <div
      id="nav-icon1"
      className={`${styles.navIcon} ${isOpen ? styles.open : ""}`}
      onClick={toggleMenu}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};