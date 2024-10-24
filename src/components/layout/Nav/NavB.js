import React from 'react'
import { Link } from 'react-router-dom'
///import Logo from "../../../assets/forgeLogo.png"
import styles from "./NavB.module.css"

const NavB = () => {
    return (
    <nav className={styles.navB}>
        <ul className={styles.navList}>
            <li className={styles.navItem}>
                <Link className={styles.subText} to="/"> <span>BSI</span> Forge </Link>
            </li>
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