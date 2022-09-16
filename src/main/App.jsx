import React, {Component} from "react";
import './App.scss'

import CardItem from "../componentes/CardItem"
import Header from "../componentes/Header"

import pinus3 from '../imagens/pinus3.jpg';
//import pinus1 from '../imagens/pinus1.png';
import pinus4 from '../imagens/pinus4.jpg';
import pinus5 from '../imagens/pinus5.jpg';
import pinus6 from '../imagens/pinus6.jpg';


export default class App extends Component{
    render(){
            return(
                <div className="AppFora">
                <div className="App">
                    <Header titulo="Reciclarte" />
                    <div className="caixaDupla"> 
                    <CardItem imagem={pinus3} titulo="Madereireira X" tipo="Pinus " distancia=" 5 KM" comprimento="2x3x4" /> 
                    <CardItem imagem={pinus6} titulo="Madereireira Y" tipo="Pinus " distancia=" 10 KM" comprimento="4x3x2" />
                    </div>  
                    <div className="caixaDupla">
                    <CardItem imagem={pinus4} titulo="Madereireira Z" tipo="Pinus " distancia=" 15 KM" comprimento="5x4x3" />
                    <CardItem imagem={pinus5} titulo="Madereireira R" tipo="Pinus " distancia=" 20 KM" comprimento="1x2x3" />
                    </div>
                </div>
                </div>
            )
    }
}
