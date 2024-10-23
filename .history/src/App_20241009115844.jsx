import { useState } from 'react'
import './App.css'

function App() {

  const state= useState('John Doe');

  const name = state [0];
  const setName = state [1];

  // let name = 'John Doe';

  // console.log(state);

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      setName = (e.target.value);

      console.log(name);

      e.ttarget.value = '';
    }
  }
  return (
    <>

      <h1>Hello There, {name} </h1>

      <input type="text" onKeyDown={handleKeyDown} />


    </>
  );
}

export default App;

// let variable is...
//react only renders when props changes or state changes...