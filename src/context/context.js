import React, { Component } from "react";

const AppContext = React.createContext();

class AppProvider extends Component {
  // Context state
  state = {
    currentColor: "",
    currentSort: "",
    currentColorArray: [...Array(256).keys()],
    sortedArray: [...Array(256).keys()],
  };

  setCurrentColorArray = (array) => {
    this.setState((prevState) => ({ ...prevState, currentColorArray: array }));
  };

  changeSort = (e) => {
    if (e.currentTarget.classList.contains("bubble")) {
      this.setState({ ...this.state, currentSort: "bubbleSort" });
    } else if (e.currentTarget.classList.contains("heap")) {
      this.setState({ ...this.state, currentSort: "heapSort" });
    } else if (e.currentTarget.classList.contains("merge")) {
      this.setState({ ...this.state, currentSort: "mergeSort" });
    } else if (e.currentTarget.classList.contains("quick")) {
      this.setState({ ...this.state, currentSort: "quickSort" });
    }
  };

  changeColor = (e) => {
    if (e.currentTarget.classList.contains("red-btn")) {
      this.setState({ ...this.state, currentColor: "red" });
    } else if (e.currentTarget.classList.contains("blue-btn")) {
      this.setState({ ...this.state, currentColor: "blue" });
    } else if (e.currentTarget.classList.contains("green-btn")) {
      this.setState({ ...this.state, currentColor: "green" });
    }
  };

  render() {
    const { children } = this.props;
    const { currentColor } = this.state;
    const { currentSort } = this.state;
    const { currentColorArray } = this.state;
    const { sortedArray } = this.state;
    const { changeColor } = this;
    const { changeSort } = this;
    const { setCurrentColorArray } = this;

    return (
      <AppContext.Provider
        value={{
          sortedArray,
          currentColor,
          changeColor,
          currentSort,
          changeSort,
          currentColorArray,
          setCurrentColorArray,
        }}
      >
        {children}
      </AppContext.Provider>
    );
  }
}

export default AppContext;

export { AppProvider };
