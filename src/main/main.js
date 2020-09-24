import React from "react";
import "./main.css";
import randomize from "./randomize.js";
import AppContext from "../context/context.js";

class Main extends React.Component {
  constructor(props) {
    super();
    this.state = {
      counter:   0,
      isLoading: false
    }
  }

  static myContext = AppContext;

  componentDidMount() {
    let a = randomize(this.context.currentColorArray);
    this.context.setCurrentColorArray(a);
  }
  
  chooseColor ( color ) {
    let colorString = "";
    switch (this.context.currentColor) {
      case "red":
        colorString = `rgb(${color}, 0, 0)`;
        break;
      case "blue":
        colorString = `rgb(0, 0, ${color})`;
        break;
      case "green":
        colorString = `rgb(0, ${color}, 0)`;
        break;
      default:
        colorString = `rgb(${color}, 0, 0)`;
        break;
    }
    return colorString;
  }

  render() {
    return (
      <main>
        {this.context.currentColorArray.map((colorNumber) => {
          return (
            <div
              className="item"
              key={colorNumber}
              style={{ backgroundColor: this.chooseColor(colorNumber) }}
            ></div>
          );
        })}
      </main>
    );
  }
}
Main.contextType = AppContext;
export default Main;
