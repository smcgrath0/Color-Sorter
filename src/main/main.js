import React, { useContext, useEffect } from "react";
import "./main.css";
import randomize from "./randomize.js";
import AppContext from "../context/context.js";
import heapSort from "./heap/heap";
import mergeSort from "./merge/merge";
import quickSort from "./quick/quick";
import bubbleSort from "./bubble/bubble";

function Main(props) {
  let context = useContext(AppContext);

  useEffect(() => {
    if (!context.isPicked) {
      switch (context.currentSort) {
        case "bubbleSort":
          context.setCurrentColorArray(bubbleSort(context.currentColorArray));
          context.setIsPicked(true);
          break;
        case "mergeSort":
          context.setCurrentColorArray(mergeSort(context.currentColorArray));
          context.setIsPicked(true);
          break;
        case "quickSort":
          context.setCurrentColorArray(quickSort(context.currentColorArray));
          context.setIsPicked(true);
          break;
        case "heapSort":
          context.setCurrentColorArray(heapSort(context.currentColorArray));
          context.setIsPicked(true);
          break;
        default:
          context.setCurrentColorArray(randomize(context.currentColorArray));
          context.setIsPicked(true);
          break;
      }
    }
  })

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
      {context.currentColorArray.map((colorNumber) => {
        return (
          <div
            className="item"
            key={colorNumber}
            style={{ backgroundColor: chooseColor(colorNumber) }}
          ></div>
        );
      })}
    </main>
  );
}

export default Main;
