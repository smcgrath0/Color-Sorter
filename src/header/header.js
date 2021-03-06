import React, { useState, useContext,useEffect, useRef } from "react";
import { AppBar, Toolbar, Typography, Button, IconButton, MenuItem, Menu } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
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
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
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
      setCounter(0);
      setIsLoading(false);
    }
  }

  let chooseHeapSort = ( type ) => {
    setIsLoading( true );

    if (heapI >= 0) {
      let currentArray = [...context.currentColorArray]
      let tempHeapI = heapI;
      let current = heapSort(currentArray, heapK, tempHeapI);
      setHeapI(--heapI);
      if (Array.isArray(current)) {
        context.setCurrentColorArray(current);
      } 
    }
    if (heapI < 0 && heapK > 0) {
      let currentArray = [...context.currentColorArray]
      let swap = currentArray[0];
      currentArray[0] = currentArray[heapK];
      currentArray[heapK] = swap;
      let tempHeapK = heapK;
      let current = heapSort(currentArray, tempHeapK, 0);
      setHeapK(--heapK);

      if (Array.isArray(current)) {
        context.setCurrentColorArray(current);
      }
    }
    if (heapI < 0 && heapK <= 0) {
      setIsLoading(false);
      setHeapI(Math.floor(arrayLength / 2 - 1));
      setHeapK(arrayLength - 1);
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
      chooseHeapSort()
    }
  }, isLoading ? 50 : null)

  let handleSortClick = ( e ) => {
      setIsLoading( true );
  };

  let handleRandomClick = ( e ) => {
    setIsLoading(false);
    context.setCurrentColorArray(randomize(context.currentColorArray));
  };
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar position="static" class="header">
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>

        <div className="mobile-menu">
          <IconButton 
          edge="start" 
          color="inherit" 
          aria-label="menu"
          onClick={handleMenu}>
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
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
            </MenuItem>
            <MenuItem onClick={handleClose}>
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
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Button
                color="inherit"
                className="btn btn-random"
                onClick={(e) => {
                  handleRandomClick(e);
                }}
              >
                Randomize
              </Button>
            </MenuItem>
          </Menu>
        </div>
        <div style={{ display: "flex" }}>
          <Typography variant="h6" className="header-title">
            Color Sorter
          </Typography>
        </div>

        <div className="random-button-container">
          <Button
            color="inherit"
            className="btn btn-random"
            onClick={(e) => {
              handleRandomClick(e);
            }}
          >
            Randomize
          </Button>
        </div>

        <div className="sorting-button-container">
          {/* <Button
            color="inherit"
            className="btn btn-sort merge"
            onClick={(e) => {
              context.changeSort(e);
              handleSortClick(e);
            }}
          >
            Merge Sort
          </Button> */}
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
          {/* <Button
            color="inherit"
            className="btn btn-sort quick"
            onClick={(e) => {
              context.changeSort(e);
              handleSortClick(e);
            }}
          >
            Quick Sort
          </Button> */}
        </div>

        <div class="color-list">
          <div class="inner-color-list">
            <Button
              color="inherit"
              className={"btn color-btn turq-btn " + (context.currentColor === 'turq' ? ' active ' : '')} 
              onClick={(e) => {
                context.changeColor(e);
                handleRandomClick(e);
              }}
            >
              turq
            </Button>
            <Button
              color="inherit"
              className={"btn color-btn yellow-btn " + (context.currentColor === 'yellow' ? ' active ' : '')} 
              onClick={(e) => {
                context.changeColor(e);
                handleRandomClick(e);
              }}
            >
              Yellow
            </Button>
            <Button
              color="inherit"
              className={"btn color-btn purple-btn " + (context.currentColor === 'purple' ? ' active ' : '')} 
              onClick={(e) => {
                context.changeColor(e);
                handleRandomClick(e);
              }}
            >
              Purple
            </Button>
            <Button
              color="inherit"
              className={"btn color-btn red-btn " + (context.currentColor === 'red' ? ' active ' : '')} 
              onClick={(e) => {
                context.changeColor(e);
                handleRandomClick(e);
              }}
            >
              Red
            </Button>
            <Button
              color="inherit"
              className={"btn color-btn blue-btn " + (context.currentColor === 'blue' ? ' active ' : '')} 
              onClick={(e) => {
                context.changeColor(e);
                handleRandomClick(e);
              }}
            >
              Blue
            </Button>
            <Button
              color="inherit"
              className={"btn color-btn green-btn " + (context.currentColor === 'green' ? ' active ' : '')} 
              onClick={(e) => {
                context.changeColor(e);
                handleRandomClick(e);
              }}
            >
              Green
            </Button>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
