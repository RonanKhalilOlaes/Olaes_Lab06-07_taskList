import { useState } from 'react'
import './App.css'

// student list
const initialStudents = [
  {
    firstname: 'Alicent',
    lastname: 'Smith',
    age: 26

  },
  {
    firstname: 'Barrack',
    lastname: 'Obama,
    age: 60
  }
]

function App() {

  //the "old way?"

  // const state= useState('John Doe');

  // const name = state [0];
  // const setName = state [1]; 

  // let name = 'John Doe';

  // console.log(state);


  console.log('Component Rendered')//for testing purposes

  const [name, setName] = useState('John Doe'); // the standard

  const [students, setStudents] = useState(initialStudents);

  cosnt studentListUI = students.map(student, index =>) {
    <p key={index} {students.firstname} {students.lastname} {students.age} years old.></p>
  }



  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      setName(e.target.value);

      console.log(name);

      e.target.value = '';
    }

    
  }

  function handleChange (e) {
    setName(e.target.value)
  }

  return (
    <>

      <h1>Hello There, {name} </h1>

      <input type="text" onKeyDown={handleKeyDown}
      value={name}
      onChange={handleChange} />
      {/* lets you change the input on live */}
  

    </>
  );
}




function random(n) {
  return Math.floor(Math.random() * n);
}

function Tile () {  
  
  const [color, setColor] = useState('blue');

  function handleClick(){
    const red =random(255);
    const green =random(255);
    const blue =random(255);
  }

  return (
    <div classname = "tile"
    style={{background: color}}
    onClick={handleClick}
    >
    </div>

  )
}


export default App;
// let variable is...
//react only renders when props changes or state changes...