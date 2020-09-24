import React, { Component } from "react";

const AppContext = React.createContext();

class AppProvider extends Component {
  // Context state
  state = {
    currentColor: "",
    currentSort: "",
    currentColorArray: [...Array(256).keys()],
    isPicked: false,
  };

  // Method to update state
  setUser = (user) => {
    this.setState((prevState) => ({ user }));
  };

  setIsPicked = (iP) => {
    this.setState({ ...this.state, isPicked: iP });
  };

  setCurrentColorArray = (array) => {
    this.setState({ ...this.state, currentColorArray: array });
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
    const { isPicked } = this.state;
    const { changeColor } = this;
    const { changeSort } = this;
    const { setCurrentColorArray } = this;
    const { setIsPicked } = this;

    return (
      <AppContext.Provider
        value={{
          currentColor,
          changeColor,
          currentSort,
          isPicked,
          changeSort,
          currentColorArray,
          setCurrentColorArray,
          setIsPicked,
        }}
      >
        {children}
      </AppContext.Provider>
    );
  }
}

export default AppContext;

export { AppProvider };
