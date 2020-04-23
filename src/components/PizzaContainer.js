import React, { Component } from 'react';
import Pizza from './Pizza';

export default class PizzaContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            calculado: false,
            pequeñas: 0,
            medianas: 0,
            grandes: 0,
            nroComensales : 0,
            porcionesXPers: 0
        }
        this.handleComesales = this.handleComesales.bind(this);
        this.handleCantPizzas = this.handleCantPizzas.bind(this);
        this.calculatePizzas = this.calculatePizzas.bind(this);
    }

    handleComesales(event) {
        this.setState({nroComensales: event.target.value})
    }

    handleCantPizzas(event) {
        this.setState({porcionesXPers: event.target.value})
    }

    calculoXPizza(cantPorciones, tipoPizza) {
        if(cantPorciones % tipoPizza === 0){
            return(cantPorciones / tipoPizza)
        } else {
            return(cantPorciones / tipoPizza) // No se ha manejado el numero exacto
        }
    }

    calculatePizzas() {
        const porcPequeñas = 4;
        const porcMedianas = 6;
        const porcGrandes = 8;
        let totalPorciones = parseInt(this.state.nroComensales) * parseInt(this.state.porcionesXPers);
        this.setState({pequeñas: this.calculoXPizza(totalPorciones, porcPequeñas)});
        this.setState({medianas: this.calculoXPizza(totalPorciones, porcMedianas)});
        this.setState({grandes: this.calculoXPizza(totalPorciones, porcGrandes)});
    }

    render() {
        let estado = this.state
        return(
            <div>
                <Pizza
                    pequeñas={ estado.pequeñas }
                    medianas={estado.medianas}
                    grandes={estado.grandes}
                    calculatePizzas={this.calculatePizzas}
                    handleComensales = {this.handleComesales}
                    handleCantPizzas = {this.handleCantPizzas}/>
            </div>
        )
    }
}