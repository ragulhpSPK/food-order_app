import React from "react";
import Image from "next/image";
import styles from "../styles/cart.module.css";

function Cart() {
  return (
    <div className={styles.container}>
      <div className={styles.twosides}>
        <div className={styles.left}>
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
              <tr>
                <td>
                  <div className={styles.imgcontainer}>
                    <Image
                      src="/assets/pizza.png"
                      alt="pizza"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                </td>
                <td>
                  <span className={styles.name}>CORALZO</span>
                </td>
                <td>
                  <span className={styles.extras}>
                    Double Ingreadient,Spicy Sauce
                  </span>
                </td>
                <td>
                  <span className={styles.price}>$19.90</span>
                </td>
                <td>
                  <span className={styles.quantity}>2</span>
                </td>
                <td>
                  <span className={styles.total}>$39.80</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.right}>
          <div className={styles.wrapper}>
            <h2 className={styles.title}>Cart Total</h2>
            <div className={styles.totaltext}>
              <b className={styles.totaltexttitle}>Subtotal:</b>$79.60
            </div>
            <div className={styles.totaltext}>
              <b className={styles.totaltexttitle}>Discount:</b>$0.00
            </div>
            <div className={styles.totaltext}>
              <b className={styles.totaltexttitle}>Total:</b>$79.60
            </div>
            <button className={styles.btn}>Checkout Now</button>
          </div>
        </div>
      </div>
      <div className={styles.twosides}>
        <div className={styles.left}>
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
              <tr>
                <td>
                  <div className={styles.imgcontainer}>
                    <Image
                      src="/assets/pizza.png"
                      alt="pizza"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                </td>
                <td>
                  <span className={styles.name}>CORALZO</span>
                </td>
                <td>
                  <span className={styles.extras}>
                    Double Ingreadient,Spicy Sauce
                  </span>
                </td>
                <td>
                  <span className={styles.price}>$19.90</span>
                </td>
                <td>
                  <span className={styles.quantity}>2</span>
                </td>
                <td>
                  <span className={styles.total}>$39.80</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.right}>
          <div className={styles.wrapper}>
            <h2 className={styles.title}>Cart Total</h2>
            <div className={styles.totaltext}>
              <b className={styles.totaltexttitle}>Subtotal:</b>$79.60
            </div>
            <div className={styles.totaltext}>
              <b className={styles.totaltexttitle}>Discount:</b>$0.00
            </div>
            <div className={styles.totaltext}>
              <b className={styles.totaltexttitle}>Total:</b>$79.60
            </div>
            <button className={styles.btn}>Checkout Now</button>
          </div>
        </div>
      </div>
      <div className={styles.twosides}>
        <div className={styles.left}>
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
              <tr>
                <td>
                  <div className={styles.imgcontainer}>
                    <Image
                      src="/assets/pizza.png"
                      alt="pizza"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                </td>
                <td>
                  <span className={styles.name}>CORALZO</span>
                </td>
                <td>
                  <span className={styles.extras}>
                    Double Ingreadient,Spicy Sauce
                  </span>
                </td>
                <td>
                  <span className={styles.price}>$19.90</span>
                </td>
                <td>
                  <span className={styles.quantity}>2</span>
                </td>
                <td>
                  <span className={styles.total}>$39.80</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.right}>
          <div className={styles.wrapper}>
            <h2 className={styles.title}>Cart Total</h2>
            <div className={styles.totaltext}>
              <b className={styles.totaltexttitle}>Subtotal:</b>$79.60
            </div>
            <div className={styles.totaltext}>
              <b className={styles.totaltexttitle}>Discount:</b>$0.00
            </div>
            <div className={styles.totaltext}>
              <b className={styles.totaltexttitle}>Total:</b>$79.60
            </div>
            <button className={styles.btn}>Checkout Now</button>
          </div>
        </div>
      </div>
      <div className={styles.twosides}>
        <div className={styles.left}>
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
              <tr>
                <td>
                  <div className={styles.imgcontainer}>
                    <Image
                      src="/assets/pizza.png"
                      alt="pizza"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                </td>
                <td>
                  <span className={styles.name}>CORALZO</span>
                </td>
                <td>
                  <span className={styles.extras}>
                    Double Ingreadient,Spicy Sauce
                  </span>
                </td>
                <td>
                  <span className={styles.price}>$19.90</span>
                </td>
                <td>
                  <span className={styles.quantity}>2</span>
                </td>
                <td>
                  <span className={styles.total}>$39.80</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.right}>
          <div className={styles.wrapper}>
            <h2 className={styles.title}>Cart Total</h2>
            <div className={styles.totaltext}>
              <b className={styles.totaltexttitle}>Subtotal:</b>$79.60
            </div>
            <div className={styles.totaltext}>
              <b className={styles.totaltexttitle}>Discount:</b>$0.00
            </div>
            <div className={styles.totaltext}>
              <b className={styles.totaltexttitle}>Total:</b>$79.60
            </div>
            <button className={styles.btn}>Checkout Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
