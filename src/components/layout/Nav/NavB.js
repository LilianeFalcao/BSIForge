import React from 'react'
import { Link } from 'react-router-dom'
///import Logo from "../../../assets/forgeLogo.png"
import styles from "./NavB.module.css"

const NavB = () => {
    return (
    <nav className={styles.navB}>
        <div className={styles.logoS}>
            <div className={styles.logoImg}>
                {/*<img className={styles.logo} src={Logo} alt="logo"/>*/}
                <p className={styles.subText} >BsiForge</p>
            </div>
            <p className={styles.subText}>Forjando Soluções Tecnológicas!</p>
        </div>
        <ul className={styles.navList}>
            <li className={styles.navItem}>
                <Link className={styles.links} to="/"> <span>Inicio</span> </Link>
            </li>
            <li className={styles.navItem}>
                <Link className={styles.links} to="/servicos"> <span>Serviços</span> </Link>
            </li>
            <li className={styles.navItem}>
                <Link className={styles.links} to="/portifolio"> <span>Portifólio</span> </Link>
            </li>
            <li className={styles.navItem}>
                <Link className={styles.links} to="/quemSomos"> <span>Quem Somos</span> </Link>
            </li>
        </ul>
    </nav>
    )
}

export default NavB