import React from "react";

const Works = () => {
    return(
        <div className="content">
            <a href="https://pokemondexreact.netlify.app/"
            style={{textDecoration: "none", fontSize: "200%", marginBottom: "1%", color: "inherit"}}>Poke Projeto</a>
            <img id="Works" style={{border: "1px solid #fff", borderRadius: "none"}} 
            src="https://cdn.discordapp.com/attachments/931731406118342676/964541570110066709/unknown.png"></img>
            <div style={{fontSize: "100%"}}>Nesse projeto utilizei os principais recursos de FrontEnd<br/>
            Html, Css, Javascript, React, Requisições API através do Axios<br/>
            O projeto gera um Pokemon Aleatório (Card) e também monta Pokedex (Lista de Cards)<br/>
            Sistema de Contas ainda será implementado</div>
        </div>
    )
}

export default Works