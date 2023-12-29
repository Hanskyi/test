import React from 'react';
import './App.css';
import Cells from "./Components/Cells/Cells";
import ColorNav from "./Components/ColorNav/ColorNav";

function App() {
  return (
    <div className="App">
        <Cells/>
        <ColorNav/>
    </div>
  );
}

export default App;
