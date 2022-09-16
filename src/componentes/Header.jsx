import React from "react";
import './Header.scss'

export default props  => 
    <div className="caixaHeader">
        <div className="titulo" >
        <h1 >{props.titulo}</h1>
        </div>
        <div className="pesquisa">
        <input className="input" placeholder="Pesquisar" />
        <button type="button"> <img src="https://bit.ly/3RCTkXn" height ="12px" width="12px" /></button>
        </div>

    </div>
    