import Header from "./Header";
import Container from "./Container";
import Balance from "./components/Balance";
import Summary from "./components/Summary";
import Transfer from "./components/Transfer";
import Transactions from "./components/Transactions";

import styles from "./App.module.css";

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <Container>
          <div className={styles.grid}>
            <Balance className={styles.balance}></Balance>

            <Summary className={styles.summary} ></Summary>
            <Transfer className={styles.Transfer}></Transfer>
          </div>
          <Transactions className={styles.transactionsComponent} />
 
        </Container>
      </main>
    </>
  );
}

export default App;
