import React from 'react'
import styles from "./Footer.module.css"
import useForm from "../../../hooks/useForm"
const Footer = () => {
  const {form, onChangeInputs, clearInputs} = useForm({
    nome: " ",
    telContato: " ",
    descServico: " "
  })

  const handleSubmit = (e) =>{
    e.preventDefault()

    const FormEmailContato = {
      nome: form.nome,
      telContato: form.telContato,
      descServico: form.descServico,
    }

    console.log(FormEmailContato)
    clearInputs();
  }
  return ( 
    <footer className={styles.footerB}>
      <div className={styles.divPai}>
          <div className={styles.filho}>
            <h2>BSI Forge</h2>
            <p>Empresa Júnior de Bacharelado em Sistemas de Informáção do CEFET-MG, campus Varginha.</p>
            <p><span>CNPJ:</span> n tem ainda</p>
            <p><span>Endereço:</span> Av. dos Imigrantes, 1000 - Jardim Panorama, Varginha - MG. CEP: 37022-560 </p>
          </div>
          <div>
            <h1>Entre em contato conosco</h1>
            <form onSubmit={handleSubmit} className={styles.formEmail}>
            <label>
              <input 
                type="text" 
                name="nome" 
                placeholder='Nome'
                value={form.nome}
                onChange={onChangeInputs}
              />
            </label>
            <label>
              <input 
                type="text" 
                name="telContato" 
                value={form.telContato}
                onChange={onChangeInputs}
                placeholder='Telefone de contato'
              />
            </label>
            <label>
              <input 
                type="text" 
                name="descServico" 
                onChange={onChangeInputs}
                value={form.descServico}
                placeholder='Descrição breve do serviço'
              />
            </label>
            <button type='submit' className={styles.buttonForm}>Enviar</button>
          </form>
          </div>
      </div>
      <div className={styles.contactInfoContainer}>
        Contatos: 
        <div className={styles.contactInfo}>
          <a href="https://www.instagram.com/glacial_linn/" target="_blank" rel="noopener noreferrer">Insta</a> 
          <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer">whats</a>
          <a href="https://x.com/YohanHawks" target="_blank" rel="noopener noreferrer">X / twitter</a>
          <a href="https://www.linkedin.com/in/lilianefalcao" target="_blank" rel="noopener noreferrer">linkedin</a>
        </div>
      </div>
      <p>© 2024 Todos os direitos reservados</p>
    </footer>
  )
}

export default Footer