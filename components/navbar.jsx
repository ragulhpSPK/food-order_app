import React from "react";
import styles from "../styles/Navbar.module.css";
import Image from "next/image";

function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.CallButton}>
          <Image
            src="/assets/telephone.png"
            alt="telephone"
            width={30}
            height={30}
          />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>Order Now</div>
          <div className={styles.text}>012 345 678</div>
        </div>
      </div>

      <div className={styles.item}>Center</div>
      <div className={styles.item}>Right</div>
    </div>
  );
}

export default Navbar;
