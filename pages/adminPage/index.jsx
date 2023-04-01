import styles from "../../styles/admin.module.css";
import Image from "next/image";
import axios from "axios";
import { useState } from "react";
import React from "react";

function Admin({ products, orders }) {
  const [pizzaList, setPizzaList] = useState(products);
  // const [orderList, setOrderList] = useState(products);
  const handleDelete = async (id) => {
    console.log("trager");
    try {
      const res = await axios.delete(
        `${process.env.BASE_URL}/api/products/` + id
      );
      setPizzaList(pizzaList.filter((pizza) => pizza._id !== id));
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Products</h1>
        <table className={styles.table}>
          <thead>
            <tr className={styles.trTitle}>
              <th>Image</th>
              <th>Id</th>
              <th>Titile</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => {
              return (
                <tr className={styles.trTitle} key={product._id}>
                  <td>
                    <Image
                      src={product.img}
                      width={50}
                      height={50}
                      objectFit="cover"
                      alt="pizza"
                    />
                  </td>
                  <td>{product._id.slice(0, 5)}....</td>
                  <td>{product.title}</td>
                  <td>{product.price}</td>
                  <td>
                    <button className={styles.btn}>Edit</button>
                    <button
                      className={styles.btn}
                      onClick={() => handleDelete(product._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className={styles.item}>
        <h1 className={styles.title}>Orders</h1>
        <table className={styles.table}>
          <thead>
            <tr className={styles.trTitle}>
              <th>ID</th>
              <th>Customers</th>
              <th>Total</th>
              <th>Payment</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className={styles.trTitle}>
              <td>{"9873949663443".slice(0, 5)}....</td>
              <td>John</td>
              <td>$50</td>
              <td>paid</td>
              <td>preparing</td>
              <td>
                <button className={styles.btn}>Next</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export const getServerSideProps = async ({ params }) => {
  const productRes = await axios.get("http://localhost:3000/api/products");
  //   const orderRes = await axios.get("http://localhost:3000/api/orders");

  return {
    props: {
      //   orders: orderRes.data,
      products: productRes.data,
    },
  };
};

export default Admin;
