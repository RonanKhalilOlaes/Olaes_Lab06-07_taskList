import { useReducer } from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';

import './App.css';

const initialStudents = [
  {
    firstname: '  ',
    lastname: '',
    age: 26
  },
  {
    firstname: '',
    lastname: '',
    age: 60
  }
];

function App() {

  const [name, setName] = useState('Tasks insane');

  const [students, setStudents] = useState(initialStudents);

  const studentListUI = students.map((student, index) => (
    <p key={index}>{student.firstname} {student.lastname} </p>
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



export function TaskList({ tasks, onChangeTask, onDeleteTask }) {
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <Task
            task={task}
            onChange={onChangeTask}
            onDelete={onDeleteTask}
          />
        </li>
      ))}
    </ul>
  );
}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired
    })
  ).isRequired,
  onChangeTask: PropTypes.func.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
};

function Task({ task, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;

  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={e => {
            onChange({
              ...task,
              text: e.target.value,
            });
          }}
        />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }

  return (
    <label>
      <input
        type="checkbox"
        checked={task.done}
        onChange={e => {
          onChange({
            ...task,
            done: e.target.checked,
          });
        }}
      />
      {taskContent}
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </label>
  );
}

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};