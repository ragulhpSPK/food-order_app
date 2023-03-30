import React from "react";
import styles from "../styles/footer.module.css";
import Image from "next/image";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/assets/bg.png" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h1 className={styles.motto}>
            OH,YES, WE DID.THE LAMA PIZZA,WELL BAKED SLICE OF PIZZA.
          </h1>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>Find Our Restaurants</h1>
          <p className={styles.text}>
            1654 R.Don Road #304.
            <br />
            NewYork,85022
            <br />
            (602) 876-1010
          </p>
          <p className={styles.text}>
            1654 R.Don Road #304.
            <br />
            2356 K.Laquie rd
            <br />
            (602) 876-1011
          </p>
          <p className={styles.text}>
            1654 R.Don Road #304.
            <br />
            1614 E.erwin St #104.
            <br />
            (602) 876-1012
          </p>
          <p className={styles.text}>
            1654 R.Don Road #304.
            <br />
            1614 w.caroll St #125.
            <br />
            (602) 876-1013
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>

          <p className={styles.text}>
            SATURDAY -SUNDAY
            <br />
            12:00-24:00
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
