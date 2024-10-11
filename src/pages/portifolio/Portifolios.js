import React, { useState } from 'react'
import styles from './Portifolios.module.css'
//imagens
import um from '../../assets/1.jpg';
import dois from '../../assets/2.jpg';
import tres from '../../assets/3.jpg';
import tho from '../../assets/4.png';
//icons
import { IoArrowForward , IoArrowBackOutline  } from "react-icons/io5";


export const Portifolios = () => {
        const images = [um, dois, tres, tho]; // lista de imagens
        const [currentIndex, setCurrentIndex] = useState(0); // índice do slide atual
    
        // função para ir ao próximo slide
        const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        console.log("AAA")
        };
    
        // função para voltar ao slide anterior
        const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
        };
    
    return (
        <div  className={styles.containerGeral}>
            <div className={styles.container}>
                <div id="slide">
                    <div className={styles.items}  style={{ backgroundImage: `url(${images[currentIndex]})` }} >
                        <div className={styles.content}>
                            <div className={styles.name}>The Owl House</div>
                            <div className={styles.desc}>desenho animado do canal infantil Disney Channel</div>
                            <button>Ver mais!</button>
                        </div>
                    </div>
                </div>
                <div className={styles.buttons}>
                    <button  onClick={prevSlide}> <IoArrowBackOutline /> </button>
                    <button onClick={nextSlide}><IoArrowForward /></button>
                </div>
            </div>
        </div>
    )
}
