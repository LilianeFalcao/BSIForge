import React from 'react'
import styles from "./Footer.module.css"
//hook para formulario
import useForm from "../../../hooks/useForm"
//contact icon
import { IoLogoInstagram, IoLogoWhatsapp, IoLogoLinkedin, IoLogoGithub} from "react-icons/io5";
//envios do email
import emailjs from '@emailjs/browser';
import { serviceId, templateEmail, publicKey } from '../../../constants/variavel'
//toast
import toast from 'react-hot-toast';

const Footer = () => {

  const {form, onChangeInputs, clearInputs} = useForm({
    from_name: "",
    email: "",
    message: ""
  })

  const handleSubmit = (e) =>{
    e.preventDefault();

    if (!form.from_name || !form.email || !form.message) {
      toast.error("Por favor, preencha todos os campos.");
      return;
    }

    const templateParams = {
      from_name: form.from_name,
      email: form.email,
      message: form.message,
    }

    emailjs.send(serviceId, templateEmail, templateParams, publicKey)
    .then((response) => {
      toast.success('E-mail enviado com sucesso!', response)
    })
    .catch( (err) => {
      toast.error("Ops, algo deu errado!", err)
    });


    clearInputs();
  }
  return ( 
    <footer className={styles.footerB}>
      <div className={styles.divPai}>
          <div className={styles.filho}>
            <h2><span>BSI</span> Forge</h2>
            <p>Empresa Júnior de Bacharelado em Sistemas de Informáção do CEFET-MG, campus Varginha.</p>
            <p><span>CNPJ:</span> n tem ainda</p>
            <p><span>Endereço:</span> Av. dos Imigrantes, 1000 - Jardim Panorama, Varginha - MG. CEP: 37022-560 </p>
          </div>
          <div>
            <h1>Entre em contato conosco</h1>
            <form 
              onSubmit={handleSubmit} 
              className={styles.formEmail}>
            <label>
              <input 
                type="text" 
                name="from_name" 
                placeholder='Ensira um nome'
                value={form.from_name}
                onChange={onChangeInputs}
              />
            </label>
            <label>
              <input 
                type="email" 
                name="email" 
                value={form.email}
                onChange={onChangeInputs}
                placeholder='Informe um email para contato'
              />
            </label>
            <label>
            <textarea 
                type="text" 
                name="message" 
                onChange={onChangeInputs}
                value={form.message}
                placeholder='Descrição breve do serviço que deseja'></textarea>
            </label>
            <button type='submit' className={styles.buttonForm}>Enviar</button>
          </form>
          </div>
      </div>
      <div className={styles.contactInfoContainer}>
        <h3>Contatos: </h3>
        <div className={styles.icon}>
          <a className={styles.instagram} href="https://www.instagram.com/bsiforge/" target="_blank" rel="noopener noreferrer"> 
            <IoLogoInstagram size={30}/> 
          </a> 
          <a className={styles.whatsapp} href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer"> 
            <IoLogoWhatsapp size={30}/>
          </a>
          <a className={styles.linkedin} href="https://www.linkedin.com/in/lilianefalcao" target="_blank" rel="noopener noreferrer"> 
            <IoLogoLinkedin size={30}/>
          </a>
          <a className={styles.gitHub} href="https://github.com/LilianeFalcao" target="_blank" rel="noopener noreferrer"> 
            <IoLogoGithub size={30}/>
          </a>
        </div>
      </div>
      <p>© 2024 Todos os direitos reservados</p>
    </footer>
  )
}

export default Footer