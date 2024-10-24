import React from 'react'
import styles from './Servicos.module.css'

const Servicos = () => {
  return (
    <div className={styles.containerGeral}>
      <div className={styles.titulos}>
          <h3>Detalhes dos nossos serviços</h3>
      </div>
      <div className={styles.CardsContainers}>
          <div className={styles.CardSites}>
            <h3>Desenvolvimento de Sites</h3>
            <div className={styles.cardInfos}>
              <p><span>Desenvolvimento de Sites Institucionais/Landing Pages</span></p>
              <p>
                Sites Institucionais são como outdoors, sites de página única, no intuito de passar informações sobre um produto e/ou serviço.
              </p>
              <p><span>Desenvolvimento de Sistemas E-commerce/Personalizados</span></p>
              <p>
                
              </p>
            </div>
          </div>

          <div className={styles.CardMidia} >
            <h3>Gerenciamento de Midias Sociais</h3>
            <p>
            Gerenciamento 
            </p>
          </div>

          <div className={styles.CardMobile}>
            <h3>Desenvolvimento de Aplicações Mobile</h3>
            <p>
              Tem 
            </p>
          </div>
      </div>
    </div>
  )
}

export default Servicos