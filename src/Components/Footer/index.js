import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";
import { CiFacebook, CiInstagram } from "react-icons/ci";
import { BsTwitter } from "react-icons/bs";
export default function Footer(params) {
  const handleUserProfile = () => {
    alert("hi");
  };
  return (
    <footer>
      <div className={styles.main}>
        <p className={styles.primary_txt}>Privacy policy | Terms</p>
        <p className={styles.rightstxt}>
          © 2023 All Rights Reserved, Fam Snap®
        </p>
        <div className={styles.wrapper1}>
          Follow us on
          <CiFacebook className={styles.icons} />
          <CiInstagram className={styles.icons} />
          <BsTwitter className={styles.icons} />
        </div>
      </div>
    </footer>
  );
}
