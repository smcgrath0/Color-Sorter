import React, { useState, useContext,useEffect, useRef } from "react";
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core'
import "./header.css";
import randomize from "../main/randomize.js";
import AppContext from "../context/context.js";
import useInterval from "../useInterval/useInterval.js";
import heapSort from "../main/heap/heap";
import mergeSort from "../main/merge/merge";
import quickSort from "../main/quick/quick";
import bubbleSort from "../main/bubble/bubble";


function Header() {
  let context = useContext(AppContext);
  const arrayLength = context.currentColorArray.length;
  let [ counter, setCounter ] = useState(0);
  let [ heapI, setHeapI ] = useState(Math.floor(arrayLength / 2 - 1));
  let [ heapK, setHeapK ] = useState(arrayLength - 1);
  let [ isLoading, setIsLoading ] = useState(false);

  let chooseBubbleSort = ( type ) => {
    setIsLoading( true );
    let currentObject = type(context.currentColorArray, counter);
    setCounter(currentObject.round);
    context.setCurrentColorArray(currentObject.array);

    let check = currentObject.array.filter((element, index) => element === context.sortedArray[index] ? false : true);
    if (check.length === 0) {
      setIsLoading(false);
    }
  }
  
  let chooseHeapSort = ( type ) => {
    setIsLoading( true );

    if (heapI >= 0) {
      setHeapI(--heapI);
      let current = heapSort(context.currentColorArray, heapI, heapK);
    }
    if (heapK >= 0) {
      setHeapK(--heapK);
      let current = heapSort(context.currentColorArray, heapI, heapK);
      if (current.isArray()) {

      }
    }
    if (heapI < 0 && heapK < 0) {
      setIsLoading(false);
    }
    let current = heapSort(context.currentColorArray, heapI, heapK);
    if (current.isArray()) {
      
      setIsLoading(false);
    } else {
      chooseHeapSort();
    }
  }

  useInterval( () => {
    if (context.currentSort === 'bubbleSort') {
      chooseBubbleSort(bubbleSort)
    } else if (context.currentSort === 'mergeSort') {
      chooseBubbleSort(mergeSort)
    } else if (context.currentSort === 'quickSort') {
      chooseBubbleSort(quickSort)
    } else if (context.currentSort === 'heapSort') {
      chooseHeapSort(heapSort)
    }
  }, isLoading ? 300 : null)

  let handleSortClick = ( e ) => {
      setIsLoading( true );
  };

  let handleRandomClick = ( e ) => {
    setIsLoading(false);
    context.setCurrentColorArray(randomize(context.currentColorArray));
  };

  return (
    <AppBar position="static">
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex" }}>
          <Typography variant="h6" className="header-title">
            Color Sorter
          </Typography>
        </div>

        <div>
          <Button
            color="inherit"
            className="btn btn-sort merge"
            onClick={(e) => { 
              handleRandomClick(e);
            }}
          >
            Randomize
          </Button>
        </div>

        <div>
          <Button
            color="inherit"
            className="btn btn-sort merge"
            onClick={(e) => { 
              context.changeSort(e);
              handleSortClick(e);
            }}
          >
            Merge Sort
          </Button>
          <Button
            color="inherit"
            className="btn btn-sort heap"
            onClick={(e) => { 
              context.changeSort(e);
              handleSortClick(e);
            }}
          >
            Heap Sort
          </Button>
          <Button
            color="inherit"
            className="btn btn-sort bubble"
            onClick={(e) => { 
              context.changeSort(e);
              handleSortClick(e);
            }}
          >
            Bubble Sort
          </Button>
          <Button
            color="inherit"
            className="btn btn-sort quick"
            onClick={(e) => { 
              context.changeSort(e);
              handleSortClick(e);
            }}
          >
            Quick Sort
          </Button>
        </div>

        <div>
          <Button
            color="inherit"
            className="btn red-btn"
            onClick={(e) => { 
              context.changeColor(e);
              handleRandomClick(e);
            }}
          >
            Red
          </Button>
          <Button
            color="inherit"
            className="btn blue-btn"
            onClick={(e) => { 
              context.changeColor(e);
              handleRandomClick(e);
            }}
          >
            Blue
          </Button>
          <Button
            color="inherit"
            className="btn green-btn"
            onClick={(e) => { 
              context.changeColor(e);
              handleRandomClick(e);
            }}
          >
            Green
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
