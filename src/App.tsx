import React from 'react';
import './style/main.scss';
import './style/global.scss';
import { Navbar } from "./components";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar logo={`${process.env.PUBLIC_URL}/images/SVG/logo.svg`} logotext="Nerdee.io"></Navbar>
      </header>
    </div>
  );
}

export default App;