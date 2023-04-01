import React from "react";
import styles from "../styles/addbutton.module.css";

function AddButton({ setClose }) {
  return (
    <div onClick={() => setClose(false)} className={styles.mainaddbutton}>
      Add New Pizza
    </div>
  );
}

export default AddButton;
