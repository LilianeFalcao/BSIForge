import React from 'react'
import polvoImg from '../../assets/finalmente2.png'
import styles from './Home.module.css'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.PolvoCoisasBonitas}>
        <p className={styles.TextoPagInicial}>  
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        It has survived not only five centuries, but also the leap into electronic typesetting, 
        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
        containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
        PageMaker including versions of Lorem Ipsum.
        </p>
        <img src={polvoImg} alt="" />
      </div>
      <div className={styles.Diferenciais}>
        Nossos Diferenciais
        <div>
          aaaaaaaaaaaaaaaaaaaaa
        </div>
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
          <Link className={styles.ServicosButton} to='/servicos'>Veja com mais detalhes nossos serviços</Link>
          <h3>Dê uma olhada em projetos realizados por nós</h3>
          <Link to='/portifolios'>Vá para portifólio</Link>
        </div>
      </div>
    </div>
  )
}

export default Home