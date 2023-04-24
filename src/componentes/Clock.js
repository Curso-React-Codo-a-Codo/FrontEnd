//ESTE ES UN COMPONENTE FUNCIONAL
/*export default function Clock (props){
    return (
        <>
        <span>
            Esto es un reloj que da la hora:
            <b>
                { props.date.toLocaleTimeString() }
            </b>
        </span>
        </>
    )
}
*///Componete de Clase, el que tiene que saber su propio estado para actualizarse//necesita mantener informacion
import { Component } from "react";

export default class Clock extends Component {
    constructor(props) {
        super(props); //al usar extends estoy creando un componente q depende de un componente de react
        this.state = { date: new Date()};
    }

    // es un nuevo metodo para actualizar el estado del reloj
    tick(){
        this.setState( { date: new Date()} );//cuando se modifica el state, llama al render de nuevo
    }

    // es invocado cuando el componente ya se pinto or primero vez y esta listo en el VDOM
    componentDidMount(){
        this.timerOne = setInterval( () => this.tick() , 1000 )
    }

    render(){
        return(
        <>
        <span>
            Esto es un reloj que da la hora:
            <b>
               {this.state.date.toLocaleTimeString() }
            </b>
        </span>
        </>
    )}
}