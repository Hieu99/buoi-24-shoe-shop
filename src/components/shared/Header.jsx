import React from "react";
import styles from "./Header.module.scss";
import clsx from "clsx";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={clsx("container", styles.headerWrapper)}>
        <h3 className={clsx(styles.headerLogo)}>Shoe Shop</h3>

        {/* nav link */}
        <ul>
          <li>
            <a href="#">Home Page</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
