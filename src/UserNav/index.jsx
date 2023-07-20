import style from "./userNav.module.css";

//img
import avatar from "../assets/avatarFem.jpg";
import shopping from "../assets/bolsaDeCompras.png";
import arrow from "../assets/arrow.png";

function UserNav () {
    return(
        <>
        <ul className={style.userNavUl}>
            <li className={style.userNavCircle}>
                <div></div>
            </li>
            <li className={style.search}>
            <img width="30" src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/ffffff/external-search-twitter-flatart-icons-outline-flatarticons.png" alt="external-search-twitter-flatart-icons-outline-flatarticons"/>
            </li>
            <li className={style.shopping}>
                <img src={shopping} alt="Bolsa de compras" /> 
                <div></div>
            </li>
            <li className={style.avatarCircle}>
                <figure>
                 <img src={avatar} alt="avatar" /> 
                </figure>
                <img src={arrow} alt="" width={10}/>    
                
            </li>
            
        </ul>
        </>

    )
}

export default UserNav;