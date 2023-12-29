import React from 'react';
import './App.css';
import EllItem from "./Components/CellItem/СellItem";
import Month from "./Components/Month/Month";

function App() {
  return (
    <div className="App" style={{margin: "50px auto", maxWidth: "1200"}}>
      <EllItem/>
        <Month/>
    </div>
  );
}

export default App;
