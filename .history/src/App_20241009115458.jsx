import { useState } from 'react'
import './App.css'

function App() {

  const state= useState('John Doe')

  let name = 'John Doe';

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      name = e.target.value;

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