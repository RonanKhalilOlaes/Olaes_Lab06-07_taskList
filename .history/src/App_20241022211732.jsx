

// export default App;
// // let variable is...
// //react only renders when props changes or state changes...
import { useReducer } from 'react';
import { useState } from 'react';

import './App.css';

const initialStudents = [
  {
    firstname: '  ',
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

  const [name, setName] = useState('Tasks');

  const [students, setStudents] = useState(initialStudents);

  
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

      <h1>{name}</h1>
      
    </>
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
      {/* <input type="text" value={student.lastname} 
        onChange={(e) => setStudent({ ...student, lastname: e.target.value })} />
      <input type="number" value={student.age} 
        onChange={(e) => setStudent({ ...student, age: e.target.value })}/> */}
      <button>Save</button>
    </form>
  );
}

export default App;

// components

{/* <input
        type="checkbox"
        checked={task.done}
        onChange={e => {
          onChange({
            ...task,
            done: e.target.checked
          });
        }}
      /> */}