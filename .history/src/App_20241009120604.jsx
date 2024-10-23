import { useState } from 'react'
import './App.css'

function App() {

  //the "old way?"

  // const state= useState('John Doe');

  // const name = state [0];
  // const setName = state [1]; 

  // let name = 'John Doe';

  // console.log(state);

  const [name,setName] = useState('John Doe'); // the standard

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      setName(e.target.value);

      console.log(name);

      e.target.value = '';
    }

    function handleChange (e) {
      setName(e.target.value);
    }
  }
  return (
    <>

      <h1>Hello There, {name} </h1>

      <input type="text" onKeyDown={handleKeyDown}
      value={name}
      onChange={handleChange}
       />


    </>
  );
}

export default App;

// let variable is...
//react only renders when props changes or state changes...