import React, { Fragment, useState } from "react";
import PizzariaCatalogo from "./projects/PizzariaCatalogo";
import PokeProjeto from "./projects/PokeProjeto";

const Works = () => {

    const [tabProject, seTabProject] = useState("PokeProjeto") 

    return(
        <div className="content">
            <div className="indiceProject">
                <img id="icone" onClick={() => seTabProject("PokeProjeto")} src="https://cdn2.iconfinder.com/data/icons/pokemon-filledoutline/64/pokeball-people-pokemon-nintendo-video-game-gaming-gartoon-ball-512.png"/>
                <img id="icone" onClick={() => seTabProject("PizzariaCatalogo")} src="https://cdn-icons-png.flaticon.com/512/3132/3132693.png"/>
            </div>
            <div className="project">
                {(() => {
                switch (tabProject) {
                case "PokeProjeto": return <PokeProjeto/>;
                case "PizzariaCatalogo": return <PizzariaCatalogo/>;
                default: return <PokeProjeto/>;
                }
                })()}
            </div>
        </div>
    )
}

export default Works