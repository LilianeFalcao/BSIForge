import React from 'react'
import polvoImg from '../../assets/finalmente2.png'
import styles from './Home.module.css'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.PolvoCoisasBonitas}>
        alguma coisa bonita sobre a gente
        uma linha do tempo até agr algo assim
        <img src={polvoImg} alt="" />
      </div>
      <div className={styles.Diferenciais}>
        Nossos Diferenciais
      </div>
      <div className={styles.Servicos}>
        Nossos Serviços

        <div className={styles.Card}>
          <div>
            <h3>Desenvolvimento de Sites/ Aplicações Mobile</h3>
            <p>
              Desenvolvimento de sites e aplicações mobile de qualidade
            </p>
          </div>

          <div >
            <h3>Gerenciamento de Midias Sociais</h3>
            <p>
            Gerenciamento 
            </p>
          </div>
        </div>

        <div className={styles.ServicosButton}>
          <h3>Dê uma olhada em projetos realizados por nós</h3>
          <Link to='/portifolio'>Vá para portifólio</Link>
        </div>
      </div>
    </div>
  )
}

export default Home