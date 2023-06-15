import React from 'react';
import './App.css';
import Roboflow from "./components/roboflow.js";

function App() {
  return (
    <div className="App">
        <Roboflow 
          modelName="whsnet"
          modelVersion="14"
        />

        <p>
          Here Charlie! A Robot Dog for guidance.
        </p>
    </div>
  );
}

export default App;
