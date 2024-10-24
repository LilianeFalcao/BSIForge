import React from 'react'
import styles from './Portifolio.module.css'
//icons
//import { FaLink } from "react-icons/io5";
import { FaLink } from "react-icons/fa6";
//imagens
import landing from '../../assets/eda.jpg';
/*
import amity from '../../assets/2.jpg';
import Hunter from '../../assets/3.jpg';
import tho from '../../assets/1.jpg';
const images = [
    { src: landing, alt: 'Landing page preview' },
    { src: amity, alt: 'Linn artista' },
    { src: Hunter, alt: 'Marido' },
    { src: tho, alt: 'Ladeira' },
];*/

export const Portifolio = () => {
    return (
        <div className={styles.slide}>
            <ul className={styles.ul}>
                <li className={styles.li}>
                    <div>
                        <h2>Landing Page:</h2>
                        <h3> The Owl House</h3>
                        <img src={landing} alt="" />
                        <p> Langing Page do desenho animado,
                            distribuido pelo canal Disney Channel</p>
                        <p>
                            <a className={styles.linkedin} href="https://lilianefalcao.github.io/LandingPageTheOwlHouse/" target="_blank" rel="noopener noreferrer"> 
                                <FaLink size={25}/>
                                Online
                            </a>
                        </p>
                    </div>
                </li>
                <li className={styles.li}>
                    <div>
                        <h2>E-commerce</h2>
                        <img src={landing} alt="" />
                        <p>Exemplo de E-commerce</p>
                        <p>
                            <a className={styles.linkedin} href="https://github.com/LilianeFalcao/LinnComerce" target="_blank" rel="noopener noreferrer"> 
                                <FaLink size={25}/>
                                GitHub
                            </a>
                        </p>
                    </div>
                </li>
                <li className={styles.li}>
                    <div>
                        <h2>Projeto aaa</h2>
                        <img src={landing} alt="" />
                        <p> um exemplo simplório</p>
                        <p>
                            <a className={styles.linkedin} href="https://github.com/LilianeFalcao/LinnComerce" target="_blank" rel="noopener noreferrer"> 
                                <FaLink size={25}/>
                                GitHub
                            </a>
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    )
}
