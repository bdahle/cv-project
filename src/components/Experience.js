import { Component } from "react";
import "../styles/sections.css";

class Experience extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form>
          <div>
            <label htmlFor="Workplace">Workplace </label>
            <input id="Workplace"></input>
          </div>
          <div>
            <label htmlFor="position">Position </label>
            <input id="position"></input>
          </div>
          <div>
            <label htmlFor="description">Email </label>
            <input id="description" type="text"></input>
          </div>
        </form>
      </div>
    );
  }
}

export default Experience;
