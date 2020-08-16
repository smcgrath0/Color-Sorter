import React from "react";
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core'
import "./header.css";

function Header() {

  return (
    <AppBar position="static">
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex" }}>
          <Typography variant="h6" className="header-title">
            Color Sorter
          </Typography>
        </div>

        <div>
          <Button color="inherit" className="btn red-btn">
            Merge Sort
          </Button>
          <Button color="inherit" className="btn blue-btn">
            Heap Sort
          </Button>
          <Button color="inherit" className="btn green-btn">
            Bubble Sort
          </Button>
          <Button color="inherit" className="btn green-btn">
            Quick Sort
          </Button>
        </div>

        <div>
          <Button color="inherit" className="btn red-btn">
            Red
          </Button>
          <Button color="inherit" className="btn blue-btn">
            Blue
          </Button>
          <Button color="inherit" className="btn green-btn">
            Green
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
