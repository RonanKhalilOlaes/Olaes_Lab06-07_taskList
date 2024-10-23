import { useState } from 'react'
import './App.css'

function App() {
  
 let name ='John Doe'; 

 funciton handleKeyDown(e) {
  if (e.key === '')
 }
  return (
    <>

      <h1>Hello There! {name}</h1>

      <input type="text" onKeyDown={handleKeyDown} />
      
      
    </>
  );
}

export default App;

// let variable is...