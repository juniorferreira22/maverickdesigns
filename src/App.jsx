import Logo from '../public/components/logo/logo'
import SocialMedia from '../public/components/socialmedia/socialmedia'
import Welcome from '../public/components/welcome/welcome'
import Contact from '../public/components/contact/contact'
import "../public/components/navbar/navbar.css"
import { useState } from 'react'
import AboutMe from '../public/components/aboutme/aboutme'
import Footer from '../public/components/footer/footer'
import Designs from '../public/components/designs/designs'

function App() {

  const [page, setPage] = useState(<Welcome />)

  // quando ativo, renderiza a pagina de bem vindo na variavel

  return (
    <>
      <Logo />

      {/* barra de navegacao, onde cada clique renderiza algo dentro do main */}
      <nav className='navbar'>

        {/* clicar span  home = renderizar welcome */}
        <span onClick={() => setPage(<Welcome />)} id='home' className='navbar__button'>Home</span>

        <span onClick={() => setPage(<Designs />)} id='designs' className='navbar__button'>Designs</span>

        <span onClick={() => setPage(<AboutMe />)} id='aboutme' className='navbar__button'>Sobre Mim</span>

        {/* clicar span contato = renderizar pagina de contato */}
        <span onClick={() => setPage(<Contact />)} id='contact' className='navbar__button'>Contato</span>
      </nav>

      {/* variavel onde o retorno de cada clique ira ser renderizado dentro dela */}
      <div>
        <span id='variavel'>{page}</span>
      </div>

      <SocialMedia />
      <Footer />
    </>

  )
}

export default App
