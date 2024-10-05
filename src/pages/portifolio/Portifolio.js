import React, { useEffect, useState } from 'react';
// images
import landing from '../../assets/eda.jpg';
import amity from '../../assets/theOwlHouse (3).jpg';
import Hunter from '../../assets/hunter.jpg';
import tho from '../../assets/theOwlHouse (4).jpg';
// biblioteca do carrossel
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// css carrossel
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// css
import styled from 'styled-components';
import styles from './Portifolio.module.css';

const images = [
  { src: landing, alt: 'Landing page preview' },
  { src: amity, alt: 'Linn artista' },
  { src: Hunter, alt: 'Marido' },
  { src: tho, alt: 'Ladeira' },
];

// Styled components

// Estilos para as imagens
const ImgStyled = styled.img`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%; /* Imagem ocupa 100% da largura do container */
  height: auto; /* Altura ajustada automaticamente para manter proporção */
  max-width: 650px; 
  object-fit: cover;

  @media (max-width: 1024px) {
    max-width: 500px; /* Ajuste para telas menores que 1024px */
  }

  @media (max-width: 720px) {
    max-width: 100%; /* Ajusta a largura para ocupar todo o espaço em telas pequenas */
    height: 360px; /* Altura reduzida para telas menores */
  }
`;

const Portifolio = () => {
  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    function handleSize() {
      if (window.innerWidth < 720) {
        setSlidesPerView(1);
      } else {
        setSlidesPerView(2);
      }
    }

    handleSize();

    window.addEventListener('resize', handleSize);

    return () => {
      window.removeEventListener('resize', handleSize);
    };
  }, []);

  return (
    <div className={styles.containerGeral}>
      <h1>Alguns dos nossos projetinhos</h1>
      <Swiper
        className={styles.a}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={slidesPerView}
        navigation
        spaceBetween={10}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        breakpoints={{
          480: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
      >
        {images.map((image, i) => (
          <SwiperSlide key={i}>
            <ImgStyled src={image.src} alt={image.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Portifolio;