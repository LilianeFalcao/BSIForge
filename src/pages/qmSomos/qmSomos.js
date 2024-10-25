import React from 'react'
import styles from './qmSomos.module.css'
import styled from 'styled-components'
import Linn  from "../../assets/Linn.jpg"
import Marido  from "../../assets/Giovanni.jpeg"
import Ladeira  from "../../assets/Ladeira.jpeg"
import Cauan  from "../../assets/Cauan.jpeg"

const QmSomos = () => {
  const ImageFundadores = styled.img `
    width: 300px; 
    height: 200px; 
    border-radius: 100%; 
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
    </div>
    <div className={styles.valores}>
      <h2> sobre os valores</h2>
      <div className={styles.valor2s}>
        <div className={styles.valoress}>
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
        </div>
        <div className={styles.valoresPartido} >
          <h1>Valores: I.E.C.C.I</h1>
          <p className={styles.val}> 
            <h3>Inovação</h3>
            <h3>Ética</h3>
            <h3>Comprometimento</h3>
            <h3>Clientes em primeiro lugar</h3>
            <h3>Incentivo à formação profissional</h3>
          </p>
        </div>
      </div>
    </div>
    <div>
      <h2>nossos fundadores</h2>
      <div className={styles.images}>
        <ImageFundadores src={Linn} alt="Linn (Liliane) O. Falcão" />
        <ImageFundadores src={Marido} alt="Giovanni S. Martins" />
        <ImageFundadores src={Ladeira} alt="Ryan S. Ladeira" />
        <ImageFundadores src={Cauan} alt="Cauan E. Tavares" />
      </div>
    </div>
  </div>
  )
}

export default QmSomos