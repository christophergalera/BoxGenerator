import './App.css';
import React, { useState } from 'react';
import Form from './Components/Form';
import Display from './Components/Display';

//without Ninja Bonus

function App() {
  const [ boxColorArray, setBoxColorArray ] = useState([]);

  return (
    <div className="App">
      <h1>Box Generator</h1>
      <Form boxColorArray={ boxColorArray } setBoxColorArray={ setBoxColorArray } />
      <Display boxColorArray={ boxColorArray } />
    </div>
  );
}

export default App;