import './App.css'
import React, {useState} from 'react';
import Task from './components/Task';
import AddTaskForm from './components/AddTaskForm';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Hacer la compra', completed: false },
    { id: 2, text: 'Llamar al médico', completed: true },
    { id: 3, text: 'Hacer ejercicio', completed: false }
  ]);


  const addTask = (text) => {
    const newTask = {id: tasks.length +1, text, completed: false};
    setTasks([... tasks, newTask]);
  };

  const deleteTask = (taskid) => {
    setTasks(tasks.filter(task => task.id !== taskid));
  };

  const toggleTask = (taskid) => {
    setTasks(tasks.map(task => task.id === taskid ? {...task, completed: !task.completed}: task));
  };
  return (
    <div>
      <h1>Lista de tareas</h1>
      <AddTaskForm onAdd={addTask} />
      <div>
        {tasks.map(task =>(
          <Task key={task.id}
          task ={task}
          onDelete={deleteTask}
          onToggle={toggleTask} />
        ))}
      </div>
    </div>
  );
};

export default App;