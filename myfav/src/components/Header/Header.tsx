import React from "react";
import Navbar from "./Navbar";
import styles from "./Header.module.scss";
import User from "./User";

const Header = () => {
  return (
    <header className={styles.header}>
      <Navbar />
      <User />
    </header>
  );
};
export default Header;
