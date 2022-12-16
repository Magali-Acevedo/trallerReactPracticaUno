import UserNav from "../UserNav"
import styles from './header.module.css';
import Logo from '../Logo';

function Header () {
    return (
        <>
        <header>
            <Logo className={styles.logo}></Logo>
            <nav className={styles.nav}>
                <ul className={styles.navUl}>
                    <li>
                        <a href="">Share</a>
                    </li>
                    <li>
                        <a href="">Shopping</a>
                    </li>
                    <li>
                        <a href="">Walletcash</a>
                    </li>
                    <li>
                        <a href="">My Earnings</a>
                    </li>
                    <li>
                        <a href="">Help</a>
                    </li>
                    
                </ul>
               
               <UserNav></UserNav>
            </nav>
            
        </header>
        </>
    )
}

export default Header;