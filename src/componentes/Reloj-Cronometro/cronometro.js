import { Component } from "react";

export default class Cronometro extends Component {
  constructor(props) {
    super(props);
    this.state = { segundos: 0, minutos: 0, horas: 0 };
  }

  TicTac() {
    const { segundos, minutos } = this.state;
    if (segundos === 59) {
      this.setState({
        segundos: 0,
        minutos: this.state.minutos + 1,
      });
    } else {
      this.setState({
        segundos: this.state.segundos + 1,
      });
    }
    if (minutos === 59) {
      this.setState({
        minutos: 0,
        horas: this.state.horas + 1,
      });
    }
  }

  componentDidMount() {
    this.cronometro = setInterval(() => this.TicTac(), 1000);
  }

  render() {
    return (
      <span>
        <b>
          {this.state.horas}:{this.state.minutos}:{this.state.segundos}
        </b>
      </span>
    );
  }
}
