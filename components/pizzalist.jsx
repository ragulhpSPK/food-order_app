import React from "react";
import styles from "../styles/pizzalist.module.css";
import PizzaCard from "./pizzaCard";

function Pizzalist() {
  return (
    <div className={styles.container}>
      <h1 className={styles.tittle}>The Beat Tv's</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi tempora
        tempore doloremque inventore. Eius autem sunt eaque adipisci saepe quos.
        Recusandae aliquam suscipit id hic illo, voluptatum temporibus beatae
        accusamus.
      </p>
      <div className={styles.wrapper}>
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
      </div>
    </div>
  );
}

export default Pizzalist;
