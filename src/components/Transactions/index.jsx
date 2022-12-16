import TableContainer from "../TableContainer";
import FilaTransactions from "../FilaTransactions";

import clsx from "clsx";
import styles from "./transactions.module.css";

//img icons
import paypal from "../../assets/payPal.png";
import bank from "../../assets/banco.png"

function Transactions ({className}) {
    return (
        <>
            <div className={clsx(className, styles.transactionsContainer)}>
                <div className={styles.headTransactions}>
                    <p>Cash Out Transactions</p>
                    <div className={styles.transactionsSelect}>
                    <select name="" id="">
                        <option value="">Filter</option>
                    </select>
                    <select name="" id="">
                        <option value="">Date Range</option>
                        <option value="January">January</option>
                        <option value="February">February</option>
                        <option value="March">March</option>
                    </select>
                    </div>

                </div>
                 
                <TableContainer>
                 
                    <FilaTransactions 
                    icon={paypal} 
                    iconColor="Blue"
                    iconSize="30"
                    btnColor="Green"
                    type="Paypal"
                    detailType="Whithdraw"
                    date="May 18, 2022"
                    time="09:30 PM"
                    idTransaction="KWIK9X22"
                    amount="830.00"
                    status="Delivered"
                    expectPayment="10 June, 2022"
                    />
                     <FilaTransactions 
                    icon={paypal} 
                    iconColor="Yellow"
                    iconSize="30"
                    btnColor="Pink"
                    type="My Wallet"
                    detailType="Whithdraw"
                    date="May 10, 2022"
                    time="04:30 PM"
                    idTransaction="KWIK9X22"
                    amount="535.00"
                    status="On Hold"
                    expectPayment="12 June, 2022"
                    />
                     <FilaTransactions 
                    icon={bank} 
                    iconColor="Green"
                    iconSize="50"
                    btnColor="Blue"
                    type="Bank Transfer"
                    detailType="Whithdraw"
                    date="May 06, 2022"
                    time="09:30 PM"
                    idTransaction="KWIK9X22"
                    amount="2,371.00"
                    status="In Process"
                    expectPayment="19 June, 2022"
                    />
                
    
       
                </TableContainer>
            </div>
        </>
    )
}

export default Transactions;