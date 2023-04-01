import React, { useState } from "react";
import Image from "next/image";
import styles from "../styles/cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import { reset } from "@/redux/cartslice";
import OrderDetail from "@/components/orderdetail";
import { useRouter } from "next/router";

import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";

import axios from "axios";

function Cart() {
  const [open, setOpen] = useState(false);
  const [cash, setCash] = useState(false);

  const amount = "2";
  const currency = "USD";
  const style = { layout: "vertical" };
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const router = useRouter();

  const createOrder = async (data) => {
    try {
      const res = await axios.post(`${server}/api/orders`, data);
      if (res.status === 201) {
        dispatch(reset);
        router.push(`/orders/${res.data._id}`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.twosides}>
        <div className={styles.left}>
          {cart.products.map((product) => {
            return (
              <table className={styles.table} border="1">
                <thead>
                  <tr className={styles.tr}>
                    <th>Product</th>
                    <th>Name</th>
                    <th>Extras</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                  </tr>
                </thead>

                <tbody>
                  <tr className={styles.tr} key={product._id}>
                    <td>
                      <div className={styles.imgcontainer}>
                        <Image
                          src={product.img}
                          alt="pizza"
                          layout="fill"
                          objectFit="contain"
                        />
                      </div>
                    </td>
                    <td>
                      <span className={styles.name}>{product.title}</span>
                    </td>
                    <td>
                      <span className={styles.extras}>
                        {product.extras.map((extra) => {
                          return <span key={extra._id}>{extra.title}</span>;
                        })}
                      </span>
                    </td>
                    <td>
                      <span className={styles.price}>{product.price}</span>
                    </td>
                    <td>
                      <span className={styles.quantity}>
                        {product.quantity}
                      </span>
                    </td>
                    <td>
                      <span className={styles.total}>
                        {product.price * product.quantity}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            );
          })}
        </div>
        <div className={styles.right}>
          <div className={styles.wrapper}>
            <h2 className={styles.title}>Cart Total</h2>
            <div className={styles.totaltext}>
              <b className={styles.totaltexttitle}>Subtotal:</b>
              {cart.total}
            </div>
            <div className={styles.totaltext}>
              <b className={styles.totaltexttitle}>Discount:</b>$0.00
            </div>
            <div className={styles.totaltext}>
              <b className={styles.totaltexttitle}>Total:</b>
              {cart.total}
            </div>
            {open ? (
              <div className={styles.paymentmethod}>
                <button
                  onClick={() => setCash(true)}
                  style={{
                    width: "260px",
                    height: "40px",
                    marginBottom: "5px",
                    color: "teal",
                    fontWeight: "bold",
                  }}
                >
                  Cash On Delivery
                </button>
                <PayPalScriptProvider
                  options={{
                    "client-id": "test",
                    // "disable-funding": "credit,card",
                  }}
                >
                  <PayPalButtons style={{ layout: "horizontal" }} />
                </PayPalScriptProvider>
              </div>
            ) : (
              <button className={styles.btn} onClick={() => setOpen(true)}>
                Checkout Now
              </button>
            )}
          </div>
        </div>
        {cash && <OrderDetail total={cart.total} createOrder={createOrder} />}
      </div>
    </div>
  );
}

export default Cart;
