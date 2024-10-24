import React from 'react'
import { Link } from 'react-router-dom'
import styles from './qmSomos.module.css'
import styled from 'styled-components'
import Linn  from "../../assets/linn.png"
import Marido  from "../../assets/marido.png"
import Ladeira  from "../../assets/ladeira.png"
import Cauan  from "../../assets/cauan.jpg"

const QmSomos = () => {
  const ImageFundadores = styled.img `
    width: 250px; 
    height: 250px; 
    border-radius: 50%; 
    object-fit: cover; 
  `

  return (
    <div className={styles.container}>
    <div className={styles.container2}> 
      <div className={styles.title}>
        Conheça um pouco sobre a <span>BSI Forge</span>
      </div>
      <div className={styles.description}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        It has survived not only five centuries, but also the leap into electronic typesetting, 
        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
        containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
        PageMaker including versions of Lorem Ipsum.
      </div>
      <button className={styles.linkButton}>
        <Link className={styles.link} to="/estrutura">Nossa Estrutura!</Link>
      </button>
    </div>
    <div className={styles.valores}>
      <h2> sobre os valores</h2>
      <div className={styles.valor2s}>
        <div>
          <h1>Missão: </h1>
          <p>
            Desenvolver conhecimentos adquiridos dentro do curso e um ambiente de trabalho para que os alunos se empenhem em seguir com suas carreiras.
          </p>
        </div>
        <div>
          <h1>Visão:</h1>
          <p>
            Inserir jovens no mercado de trabalho através de um ambiente que desenvolva sua criatividade.
          </p>
        </div>
        <div>
          <h1>Valores:</h1>
          <p className={styles.val}> 
            <span>Inovação</span>
            <span>Ética</span>
            <span>Comprometimento</span>
            <span>Cliente em primeiro lugar</span>
            <span>Incentivo à formação profissional</span>
          </p>
        </div>
      </div>
    </div>
    <div>
      <h2>nossos fundadores</h2>
      <div className={styles.images}>
        <ImageFundadores src={Marido} alt="Giovanni de Souza Martins" />
        <ImageFundadores src={Linn} alt="Linn (Liliane) de Oliveira Falcão" />
        <ImageFundadores src={Ladeira} alt="Ryan S. Ladeira" />
        <ImageFundadores src={Cauan} alt="Cauan E. Tavares" />
      </div>
    </div>
  </div>
  )
}

export default QmSomos