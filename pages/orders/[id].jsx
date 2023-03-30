import React from "react";
import styles from "../../styles/order.module.css";
import Image from "next/image";

function Orders() {
  const status = 0;

  const statusclass = (index) => {
    if (index - status < 1) return styles.done;
    if (index - status === 1) return styles.inprogress;
    if (index - status > 1) return styles.undone;
  };
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.row}>
          <table className={styles.table}>
            <thead>
              <tr className={styles.tr}>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Address</th>

                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span className={styles.id}>129837818237</span>
                </td>
                <td>
                  <span className={styles.name}>John Doe</span>
                </td>
                <td>
                  <span className={styles.Address}>Elton st. 212-22 LA</span>
                </td>

                <td>
                  <span className={styles.total}>$79.80</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.row}>
          <div className={statusclass(0)}>
            <Image src="/assets/paid.png" width={30} height={30} alt="paid" />
            <span>Payment</span>
            <div>
              <Image
                src="/assets/checked.png"
                className={styles.checkedicon}
                width={20}
                height={20}
                alt="paid"
              />
            </div>
          </div>
          <div className={statusclass(1)}>
            <Image src="/assets/bake.png" width={30} height={30} alt="paid" />
            <span>Preparing</span>
            <div className={styles.checkedicon}>
              <Image
                className={styles.checkedicon}
                src="/assets/checked.png"
                width={20}
                height={20}
                alt="paid"
              />
            </div>
          </div>
          <div className={statusclass(2)}>
            <Image src="/assets/bike.png" width={30} height={30} alt="paid" />
            <span>On the way</span>
            <div className={styles.checkedicon}>
              <Image
                className={styles.checkedicon}
                src="/assets/checked.png"
                width={20}
                height={20}
                alt="paid"
              />
            </div>
          </div>
          <div className={statusclass(3)}>
            <Image
              src="/assets/delivered.png"
              width={30}
              height={30}
              alt="paid"
            />
            <span>Delivered</span>
            <div>
              <Image
                className={styles.checkedicon}
                src="/assets/checked.png"
                width={20}
                height={20}
                alt="paid"
              />
            </div>
          </div>
        </div>
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
          <button className={styles.btn}>PAID</button>
        </div>
      </div>
    </div>
  );
}

export default Orders;
