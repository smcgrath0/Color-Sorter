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
  let sortFunc;

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
      sortFunc = mergeSort;
      break;
  }

  console.log(context);
  for (let i = 0; i < 256; i++) {
    colorArray.push(i);
  }
  colorArray = randomize(colorArray);

  return (
    <main>
      {colorArray.map((color) => {
        return <div className="item" key={color} style={{backgroundColor: `rgb(${color}, 0, 0)`}}></div>
      })}
    </main>
  );
}

export default Main;
