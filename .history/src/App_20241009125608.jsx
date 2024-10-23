// import { useState } from 'react'
// import './App.css'

// // student list
// const initialStudents = [
//   {
//     firstname: 'Alicent',
//     lastname: 'Smith',
//     age: 26

//   },
//   {
//     firstname: 'Barrack',
//     lastname: 'Obama',
//     age: 60
//   }
// ]

// function App() {

//   //the "old way?"

//   // const state= useState('John Doe');

//   // const name = state [0];
//   // const setName = state [1]; 

//   // let name = 'John Doe';

//   // console.log(state);


//   console.log('Component Rendered')//for testing purposes

//   const [name, setName] = useState('John Doe'); // the standard

//   const [students, setStudents] = useState(initialStudents);

//   cosnt studentListUI = students.map(student, index =>) {
//     <p key={index} {students.firstname} {students.lastname} {students.age} years old.></p>
//   }



//   function handleKeyDown(e) {
//     if (e.key === 'Enter') {
//       setName(e.target.value);

//       console.log(name);

//       e.target.value = '';
//     }

    
//   }

//   function handleChange (e) {
//     setName(e.target.value)
//   }

//   return (
//     <>

//       <h1>Hello There, {name} </h1>

//       <input type="text" onKeyDown={handleKeyDown}
//       value={name}
//       onChange={handleChange} />
//       {/* lets you change the input on live */}
  

//     </>
//   );
// }




// function random(n) {
//   return Math.floor(Math.random() * n);
// }

// function Tile () {  
  
//   const [color, setColor] = useState('blue');

//   function handleClick(){
//     const red =random(255);
//     const green =random(255);
//     const blue =random(255);
//   }

//   return (
//     <div classname = "tile"
//     style={{background: color}}
//     onClick={handleClick}
//     >
//     </div>

//   )
// }


// export default App;
// // let variable is...
// //react only renders when props changes or state changes...

import { useState } from 'react';

import './App.css';

const initialStudents = [
  {
    firstname: 'Alice',
    lastname: 'Smith',
    age: 26
  },
  {
    firstname: 'Barack',
    lastname: 'Obama',
    age: 60
  }
];

function App() {

  const [name, setName] = useState('John Doe');

  const [students, setStudents] = useState(initialStudents);

  const studentListUI = students.map((student, index) => (
    <p key={index}>{student.firstname} {student.lastname}, {student.age} years old.</p>
  ));
  
  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      setName(e.target.value);

      console.log(name);

      e.target.value = '';
    }
  }

  function handleChange(e) {
    setName(e.target.value);
  }

  function addStudent(student) {
    setStudents([...students, student]);
  }

  return (
    <>
      <StudentForm add={addStudent} />
      {studentListUI}
      <input type="text" onKeyDown={handleKeyDown}
        value={name} 
        onChange={handleChange} 
      />

      <h1>Hello, {name}</h1>
      <Tile />
      <Tile />
      <Tile />
    </>
  );
}

function random(n) {
  return Math.floor(Math.random() * n);
}

function Tile() {
  const [color, setColor] = useState('blue');

  function handleClick() {
    const red = random(255);
    const green = random(255);
    const blue = random(255);

    setColor(`rgb(${red} ${green} ${blue})`);
  }

  return (
    <div 
      className="tile"
      style={{ background: color }}
      onClick={handleClick}>

    </div>
  );
}

function StudentForm(props) {
  // state variable for the form
  const [student, setStudent] = useState({
    firstname: '',
    lastname: '',
    age: 0
  });

  function handleSubmit(e) {
    e.preventDefault();
    props.add(student);

    setStudent({
      firstname: '',
      lastname: '',
      age: 0
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={student.firstname} 
        onChange={(e) => setStudent({ ...student, firstname: e.target.value })} />
      <input type="text" value={student.lastname} 
        onChange={(e) => setStudent({ ...student, lastname: e.target.value })} />
      <input type="number" value={student.age} 
        onChange={(e) => setStudent({ ...student, age: e.target.value })}/>
      <button>Save</button>
    </form>
  );
}

export default App;