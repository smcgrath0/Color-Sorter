import React, { Component } from "react";

const AppContext = React.createContext();

class AppProvider extends Component {
  // Context state
  state = {
    color: "",
    sort: "",
  };

  // Method to update state
  setUser = (user) => {
    this.setState((prevState) => ({ user }));
  };

  changeSort = (e) => {
    if (e.currentTarget.classList.contains("bubble")) {
      this.setState({ ...this.state, sort: "bubble" });
    } else if (e.currentTarget.classList.contains("heap")) {
      this.setState({ ...this.state, sort: "heap" });
    } else if (e.currentTarget.classList.contains("merge")) {
      this.setState({ ...this.state, sort: "merge" });
    } else if (e.currentTarget.classList.contains("quick")) {
      this.setState({ ...this.state, sort: "quick" });
    }
  };

  changeColor = (e) => {
    if (e.currentTarget.classList.contains("red-btn")) {
      this.setState({ ...this.state, color: "red" });
    } else if (e.currentTarget.classList.contains("blue-btn")) {
      this.setState({ ...this.state, color: "blue" });
    } else if (e.currentTarget.classList.contains("green-btn")) {
      this.setState({ ...this.state, color: "green" });
    }
  };

  render() {
    const { children } = this.props;
    const { color } = this.state;
    const { sort } = this.state;
    const { changeColor } = this;
    const { changeSort } = this;

    return (
      <AppContext.Provider
        value={{
          color,
          changeColor,
          sort,
          changeSort
        }}
      >
        {children}
      </AppContext.Provider>
    );
  }
}

export default AppContext;

export { AppProvider };
