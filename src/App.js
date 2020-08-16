import React from 'react';
import './App.css';
import AppContext from "./context/context.js";
import Header from './header/header.js';
import Main from './main/main.js';
import changeSort from './context/changeSort';
import changeColor from './context/changeColor';

function App() {
  // const appContext = {
  //   changeSort: changeSort,
  //   changeColor: changeColor,
  // };
  return (
    // <AppContext.Provider value={appContext}>
      <div className="App">
        <Header></Header>

        <Main></Main>
      </div>
    // </AppContext.Provider>
  );
}

export default App;
