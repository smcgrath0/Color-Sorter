import React, { Component } from "react";

const AppContext = React.createContext();

class AppProvider extends Component {
  // Context state
  state = {
    currentColor: "red",
    currentSort: "",
    currentColorArray: [...Array(256).keys()],
    sortedArray: [...Array(256).keys()],
  };

  setCurrentColorArray = (array) => {
    this.setState((prevState) => ({ ...prevState, currentColorArray: array }));
  };

  checkCurrentColorArray = () => {
    if (this.state.currentColorArray === this.state.sortedArray) return true;
    if (this.state.currentColorArray == null || this.state.sortedArray == null) return false;
    if (this.state.currentColorArray.length !== this.state.sortedArray.length) return false;
    for (var i = 0; i < this.state.currentColorArray.length; ++i) {
      if (this.state.currentColorArray[i] !== this.state.sortedArray[i]) return false;
    }
    return true
  }

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
    } else if (e.currentTarget.classList.contains("purple-btn")) {
      this.setState({ ...this.state, currentColor: "purple" });
    } else if (e.currentTarget.classList.contains("yellow-btn")) {
      this.setState({ ...this.state, currentColor: "yellow" });
    } else if (e.currentTarget.classList.contains("turq-btn")) {
      this.setState({ ...this.state, currentColor: "turq" });
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
    const { checkCurrentColorArray } = this;

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
          checkCurrentColorArray
        }}
      >
        {children}
      </AppContext.Provider>
    );
  }
}

export default AppContext;

export { AppProvider };
