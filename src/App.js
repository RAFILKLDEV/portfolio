import { useState } from 'react';
import './App.css';
import About from './components/about/About';
import Start from './components/start/Start';
import Works from './components/works/Works';

const Portifolio = () => {

  const [tab, setTab] = useState("start")

  return(

    <div className="page">
      <head>
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
      </head>
      <div className="portContainer">
        <div className="headerPage">
          <div className="header">
            <div className="icons">
              <a href="https://www.linkedin.com/in/rafael-almeida-penha-75803421a/" id="linkedin"  class="fa fa-linkedin"/>
              <a href="https://github.com/RAFILKLDEV" id="github" class="fa fa-github"/>
              <a href="mailto:rafaelalmeidapenha@gmail.com?subject=Oportunidade de Emprego" id="email" class="fa fa-envelope-o"/>
              <a href="https://wa.me/5516992784358?text=Estou%20interessado%20em%20Contratar%20voce" id="whatsapp" class="fa fa-whatsapp"/>
              
            </div>
            <div className="whatsapp" id='button' onClick={() => setTab("start")}>Inicio</div>
            <div id='button' onClick={() => setTab("works")}>Trabalhos</div>
            <div id='button' onClick={() => setTab("about")}>Sobre mim</div>
          </div>
          {(() => {
            switch (tab) {
            case "start":   return <Start/>;
            case "works": return <Works/>;
            case "about":  return <About/>;
            default:      return <Start/>;
          }
          })()}
        </div>
        <div className="portfolio">
          <div style={{display: "flex"}}>
          <div style={{color: "rgb(255, 255, 42)", fontSize:"120%"}}>Oi</div>
          <div style={{fontSize:"120%"}}>,</div>
          </div>
          <div>Eu sou </div>
          <div style={{fontSize:"150%"}}>Rafael</div>
          <button>Me contrate!</button>
        </div>
      </div>
    </div>
    )
}

export default Portifolio