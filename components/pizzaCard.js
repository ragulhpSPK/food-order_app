import React from "react";
import styles from "../styles/pizzaCard.module.css";
import Image from "next/image";

function PizzaCard() {
  return (
    <div className={styles.container}>
      <Image src="/assets/pizza.png" alt="" width={200} height={200} />
      <h1 className={styles.title}>FIORI DI ZUCCA</h1>
      <span className={styles.price}>$19</span>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
  );
}

export default PizzaCard;
