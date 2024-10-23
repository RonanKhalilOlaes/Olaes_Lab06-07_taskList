import { useState } from 'react'
import './App.css'

function App() {

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