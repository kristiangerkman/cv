import React from 'react';
import logo from './logo.svg';
import './App.css';
import pdf from "./Gerkman_Kristian_CV.pdf"

function App() {
  return (
    <div className="App">
      <h1> Mr. Gerkman </h1>

      <embed src={pdf} width="1000" height="1200" />
    </div>
  );
}

export default App;
