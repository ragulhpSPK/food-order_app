import React from "react";
import styles from "../styles/pizzaCard.module.css";
import Image from "next/image";
import Link from "next/link";

function PizzaCard({ Pizza }) {
  return (
    <div className={styles.container}>
      <Link href={`/product/${Pizza._id}`} passHref>
        <Image src={Pizza.img} alt="" width={200} height={200} />
      </Link>

      <h1 className={styles.title}>{Pizza.title}</h1>
      <span className={styles.price}>${Pizza.price[0]}</span>
      <p className={styles.desc}>{Pizza.desc}</p>
    </div>
  );
}

export default PizzaCard;
