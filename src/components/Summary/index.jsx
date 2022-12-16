import styles from "../Summary/summary.module.css";
import clsx from "clsx";

function Summary({ className }) {
  return (
    <>
      <article className={clsx(className, styles.summaryContainer)}>
        <select>
          <option value="last-30-days">
            Last 30 Days
          </option>
          <option value="today">Today</option>
          <option value="yesterday">Yesterday</option>
          <option value="last-3-days">Last 3 days</option>
        </select>
        <div className={styles.transactions}>
          <p>Transactions</p>
          <span>38</span>
        </div>
        <div className={styles.joined}>
          <p>Joined Waves</p>
          <div className={styles.avatars}>
            <figure>
              <img src="https://st2.depositphotos.com/6672578/11269/i/600/depositphotos_112695578-stock-photo-woman-standing-on-beach-at.jpg" alt="" />
            </figure>
            <figure>
              <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
            </figure>
            <figure>
              <img src="https://uploads-ssl.webflow.com/6321fa4eb9021afb4a237ebb/63518b3451899cb324570c0e_IMA0000460000046712.jpeg" alt="" />
            </figure>
            <figure className={styles.avatarsCant}>
              <span>+8</span>
            </figure>
          </div>
        </div>
        <div className={styles.earnings}>
          <p>Earnings</p>
          <span>$2,400</span>
        </div>
      </article>
    </>
  );
}
export default Summary;
