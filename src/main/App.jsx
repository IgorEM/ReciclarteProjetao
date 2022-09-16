import React, {Component} from "react";
import './App.scss'

import CardItem from "../componentes/CardItem"
import Header from "../componentes/Header"

export default class App extends Component{
    render(){
            return(
                <div className="AppFora">
                <div className="App">
                    <Header titulo="Reciclarte" />
                    <div className="caixaDupla"> 
                    <CardItem titulo="Madereireira X" tipo="Pinus " distancia=" 5 KM" comprimento="2x3x4" /> 
                    <CardItem titulo="Madereireira Y" tipo="Pinus " distancia=" 10 KM" comprimento="4x3x2" />
                    </div>  
                    <div className="caixaDupla">
                    <CardItem titulo="Madereireira Z" tipo="Pinus " distancia=" 15 KM" comprimento="5x4x3" />
                    <CardItem titulo="Madereireira R" tipo="Pinus " distancia=" 20 KM" comprimento="1x2x3" />
                    </div>
                </div>
                </div>
            )
    }
}
