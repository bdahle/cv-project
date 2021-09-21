import { Component } from "react";
import ReactDOM from "react-dom";

class Personalia extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
    };
  }

  savePersonalia(e) {
    e.preventDefault();
    this.setState(
      {
        firstName: "Ola",
      },
      this.displayPersonalia
    );
  }

  displayPersonalia() {
    console.table(this.state);
    const element = <div>{this.state.firstName}</div>;
    ReactDOM.render(element, document.getElementById("root"));
    setTimeout(() => {
      console.log("efkj");
      this.render();
    }, 1000);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.savePersonalia.bind(this)}>
          <label htmlFor="firstName">First Name: </label>
          <input id="firstName"></input>
          <label htmlFor="lastName">Last Name: </label>
          <input id="lastName"></input>
          <label htmlFor="email">Email: </label>
          <input id="email" type="email"></input>
          <button type="submit">Save</button>
        </form>
      </div>
    );
  }
}

export default Personalia;
