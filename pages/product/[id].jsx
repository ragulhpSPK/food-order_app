import React from "react";
import styles from "../../styles/product.module.css";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addProduct } from "@/redux/cartslice";

function Product({ pizza }) {
  const [price, setPrice] = useState(pizza.price[0]);
  const [size, setSize] = useState(0);
  const [extras, setExtras] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  // const pizza = {
  //   id: 1,
  //   img: "/assets/pizza.png",
  //   name: "CAMPAGNOLA",
  //   price: [19.9, 23.9, 27.9],
  //   desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi tempora
  //       tempore doloremque inventore. `,
  // };

  const changePrice = (number) => {
    setPrice(price + number);
  };

  const handleSize = (sizeIndex) => {
    const difference = pizza.price[sizeIndex] - pizza.price[size];
    setSize(sizeIndex);
    changePrice(difference);
  };

  const handleChange = (e, option) => {
    const checked = e.target.checked;
    console.log(checked);

    if (checked) {
      changePrice(option.price);
      setExtras((pre) => [...pre, option]);
    } else {
      changePrice(-option.price);
      setExtras(extras.filter((extra) => extra.id !== option._id));
    }
  };

  const handleClick = () => {
    console.log("clicked");
    dispatch(addProduct({ ...pizza, extras, price, quantity }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgcontainer}>
          <Image
            src={pizza.img}
            alt="pizza"
            width={500}
            height={500}
            objectFit="contain"
          />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{pizza.name}</h1>
        <span className={styles.price}>{pizza.price[size]}</span>
        <p className={styles.choose}>{pizza.desc}</p>
        <h3 className={styles.choose}>Choose the Size</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => handleSize(0)}>
            <Image src="/assets/size.jpg" layout="fill" alt="size" />
            <span className={styles.number}>Small</span>
          </div>
          <div className={styles.size} onClick={() => handleSize(1)}>
            <Image src="/assets/size.jpg" layout="fill" alt="size" />
            <span className={styles.number}>Medium</span>
          </div>
          <div className={styles.size} onClick={() => handleSize(2)}>
            <Image src="/assets/size.jpg" layout="fill" alt="size" />
            <span className={styles.number}>Large</span>
          </div>
        </div>
        <h3 className={styles.choose}>Choose additional ingrediants</h3>
        <div className={styles.ingredients}>
          {pizza.extraOptions.map((option) => {
            return (
              <div className={styles.option}>
                <input
                  type="checkbox"
                  id={option.text}
                  name={option.text}
                  className={styles.checkbox}
                  onChange={(e) => handleChange(e, option)}
                />
                <label htmlFor="double">{option.text}</label>
              </div>
            );
          })}
        </div>
        <div className="styles.add">
          <input
            onChange={(e) => setQuantity(e.target.value)}
            type="number"
            value={1}
            className={styles.quantity}
          ></input>
          <button className={styles.btn} onClick={handleClick}>
            Add to Car
          </button>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `${process.env.BASE_URL}api/products/${params.id}`
  );
  return {
    props: {
      pizza: res.data,
    },
  };
};

export default Product;
