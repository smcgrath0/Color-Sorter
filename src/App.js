import React from 'react';
import './App.css';
import { AppProvider } from "./context/context.js";
import Header from './header/header.js';
import Main from './main/main.js';

function App() {
  const appContext = {
    sort: "merge",
    color: "red"
  };
  return (
    <AppProvider value={appContext}>
      <div className="App">
        <Header></Header>

        <Main></Main>
      </div>
    </AppProvider>
  );
}

export default App;
