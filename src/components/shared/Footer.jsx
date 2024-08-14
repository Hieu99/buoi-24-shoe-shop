import React from "react";
import styles from "./Footer.module.scss";
import clsx from "clsx";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={clsx("container", styles.footerContent)}>
        <h3>Contact Us</h3>
        <p>© Drip. All Rights Reserved. | Legal | Privacy</p>
      </div>
    </div>
  );
}
