import React from "react";
import styles from "../styles/addbutton.module.css";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

function Add({ setClose }) {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState(null);
  const [desc, setDesc] = useState(null);
  const [prices, setPrices] = useState([]);
  const [extras, setExtras] = useState(null);
  const [extraOptions, setExtraOptions] = useState([]);

  const changePrice = (e, index) => {
    const currentPrices = prices;
    currentPrices[index] = e.target.value;
    setPrices(currentPrices);
  };

  const handleExtraInput = (e) => {
    setExtras({ ...extras, [e.target.name]: e.target.value });
  };

  const handleExtra = (e) => {
    setExtraOptions((prev) => [...prev, extras]);
  };

  const handleCreate = async () => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "uploads");

    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/dxhbdckv2/image/upload",
        data
      );

      const { url } = uploadRes.data;
      const newProduct = {
        title,
        desc,
        prices,
        extraOptions,
        img: url,
      };
      axios.post(`${process.env.BASE_URL}/api/products`, newProduct);
      setClose(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <span
          onClick={() => {
            setClose(true);
          }}
          className={styles.close}
        >
          x
        </span>
        <h1>Add a new pizza</h1>
        <div className={styles.item}>
          <label className={styles.label}>Choose an image</label>
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Title</label>
          <input
            type="text"
            className={styles.item}
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Desc</label>
          <textarea
            type="text"
            rows={4}
            className={styles.item}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Prices</label>
          <div className={styles.priceContainer}>
            <input
              type="number"
              className={`${styles.input} ${styles.inputSm}`}
              placeholder="small"
              onChange={(e) => changePrice(e, 0)}
            />
            <input
              type="number"
              className={`${styles.input} ${styles.inputSm}`}
              placeholder="medium"
              onChange={(e) => changePrice(e, 1)}
            />
            <input
              type="number"
              className={`${styles.input} ${styles.inputSm}`}
              placeholder="large"
              onChange={(e) => changePrice(e, 2)}
            />
          </div>
        </div>

        <div className={styles.item}>
          <label className={styles.label}>Extra</label>
          <div className={styles.extra}>
            <input
              type="text"
              className={`${styles.input} ${styles.inputSm}`}
              placeholder="item"
              name="text"
              onChange={handleExtraInput}
            />
            <input
              type="number"
              className={`${styles.input} ${styles.inputSm}`}
              placeholder="price"
              name="price"
              onChange={handleExtraInput}
            />
            <button className={styles.extrabutton} onClick={handleExtra}>
              Add
            </button>
          </div>
          <div className={styles.extraitem}>
            {extraOptions.map((option) => {
              return (
                <span key={option.text} className={styles.extraItem}>
                  {option.text}
                </span>
              );
            })}
          </div>
        </div>
        <button className={styles.extrabutton} onClick={handleCreate}>
          Create
        </button>
      </div>
    </div>
  );
}

export default Add;
