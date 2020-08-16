import React, { useContext } from "react";
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core'
import "./header.css";
import AppContext from "../context/context.js";

function Header() {
  let context = useContext(AppContext);

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
            className="btn merge"
            onClick={context.changeSort}
          >
            Merge Sort
          </Button>
          <Button
            color="inherit"
            className="btn heap"
            onClick={context.changeSort}
          >
            Heap Sort
          </Button>
          <Button
            color="inherit"
            className="btn bubble"
            onClick={context.changeSort}
          >
            Bubble Sort
          </Button>
          <Button
            color="inherit"
            className="btn quick"
            onClick={context.changeSort}
          >
            Quick Sort
          </Button>
        </div>

        <div>
          <Button
            color="inherit"
            className="btn red-btn"
            onClick={context.changeColor}
          >
            Red
          </Button>
          <Button
            color="inherit"
            className="btn blue-btn"
            onClick={context.changeColor}
          >
            Blue
          </Button>
          <Button
            color="inherit"
            className="btn green-btn"
            onClick={context.changeColor}
          >
            Green
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
