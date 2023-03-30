import React from "react";
import styles from "../../styles/product.module.css";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";

function Product({ pizza }) {
  const [size, setSize] = useState(0);
  // const pizza = {
  //   id: 1,
  //   img: "/assets/pizza.png",
  //   name: "CAMPAGNOLA",
  //   price: [19.9, 23.9, 27.9],
  //   desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi tempora
  //       tempore doloremque inventore. `,
  // };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgcontainer}>
          <Image
            src={pizza.img}
            alt="pizza"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{pizza.name}</h1>
        <span className={styles.price}>{pizza.price}</span>
        <p className={styles.choose}>{pizza.desc}</p>
        <h3 className={styles.choose}>Choose the Size</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => setSize(0)}>
            <Image src="/assets/size.jpg" layout="fill" alt="size" />
            <span className={styles.number}>Small</span>
          </div>
          <div className={styles.size} onClick={() => setSize(1)}>
            <Image src="/assets/size.jpg" layout="fill" alt="size" />
            <span className={styles.number}>Medium</span>
          </div>
          <div className={styles.size} onClick={() => setSize(2)}>
            <Image src="/assets/size.jpg" layout="fill" alt="size" />
            <span className={styles.number}>Large</span>
          </div>
        </div>
        <h3 className={styles.choose}>Choose additional ingrediants</h3>
        <div className={styles.ingredients}>
          {pizza.extraOptions.map((option) => {
            console.log(option);
          })}
          <div className={styles.option}>
            <input
              type="checkbox"
              id="double"
              name="double"
              className={styles.checkbox}
            />
            <label htmlFor="double">Double Ingrediants</label>
          </div>
          {/* <div className={styles.option}>
            <input
              type="checkbox"
              id="cheese"
              name="cheese"
              className={styles.checkbox}
            />
            <label htmlFor="cheese">Extra Cheese</label>
          </div>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="spicy"
              name="spicy"
              className={styles.checkbox}
            />
            <label htmlFor="spicy">Spicy Sauce</label>
          </div>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="garlic"
              name="garlic"
              className={styles.checkbox}
            />
            <label htmlFor="garlic">Garlic Sauce</label>
          </div> */}
        </div>
        <div className="styles.add">
          <input type="number" defaultValue={1} className={styles.quantity} />
          <button className={styles.btn}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `http://localhost:3000/api/products/${params.id}`
  );
  return {
    props: {
      pizza: res.data,
    },
  };
};

export default Product;
