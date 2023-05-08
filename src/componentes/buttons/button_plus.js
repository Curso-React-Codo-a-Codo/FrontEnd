import { Component } from "react";

export default class ButtonPlus extends Component {
  constructor(props) {
    super(props);
    this.state = { contador: 0 };
  }

  incrementar() {
    this.setState({ contador: this.state.contador + 1 });
  }

  bajaruno() {
    let counter = this.state.contador - 1;
    if (counter <= 0) {
      counter = 0;
    }
    this.setState({ contador: counter });
  }

  render() {
    return (
      <>
        <button onClick={() => this.incrementar()}>++</button>
        <button onClick={() => this.bajaruno()}>--</button>
        <br></br>
        <span>El contador es: {this.state.contador}</span>
      </>
    );
  }
}
