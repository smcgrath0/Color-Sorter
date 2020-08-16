import React, { useContext } from "react";
import "./main.css";
import randomize from "./randomize.js";
import AppContext from "../context/context.js";
import heapSort from "./heap/heap";
import mergeSort from "./merge/merge";
import quickSort from "./quick/quick";
import bubbleSort from "./bubble/bubble";

function Main(props) {
  let colorArray = [];
  let context = useContext(AppContext);
  let sortFunc

  for (let i = 0; i < 256; i++) {
    colorArray.push(i);
  }

  switch (context.sort) {
    case "bubble":
      sortFunc = bubbleSort;
      break;
    case "merge":
      sortFunc = mergeSort;
      break;
    case "quick":
      sortFunc = quickSort;
      break;
    case "heap":
      sortFunc = heapSort;
      break;
    default:
      colorArray = randomize(colorArray);
      break;
  }
  const chooseColor = ( color ) => {
    let colorString = "";
    switch (context.color) {
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

  return (
    <main>
      {colorArray.map((color) => {
        return (
          <div
            className="item"
            key={color}
            style={{ backgroundColor: chooseColor(color) }}
          ></div>
        );
      })}
    </main>
  );
}

export default Main;
