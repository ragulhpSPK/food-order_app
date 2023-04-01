import React from "react";
import styles from "../../styles/order.module.css";
import Image from "next/image";
import axios from "axios";

function Orders({ order }) {
  const status = order.Status;

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
                  <span className={styles.id}>{order._id}</span>
                </td>
                <td>
                  <span className={styles.name}>{order.customer}</span>
                </td>
                <td>
                  <span className={styles.Address}>{order.address}</span>
                </td>

                <td>
                  <span className={styles.total}>{order.total}</span>
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
            <b className={styles.totaltexttitle}>Subtotal:</b>
            {order.total}
          </div>
          <div className={styles.totaltext}>
            <b className={styles.totaltexttitle}>Discount:</b>$0.00
          </div>
          <div className={styles.totaltext}>
            <b className={styles.totaltexttitle}>Total:</b>
            {order.total}
          </div>
          <button className={styles.btn}>PAID</button>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `${process.env.BASE_URL}/api/orders/${params.id}`
  );

  console.log(res);

  return {
    props: { order: res.data },
  };
};

export default Orders;
