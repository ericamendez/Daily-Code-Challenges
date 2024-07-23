import {useState} from 'react'
import './styles.css';

const INITIAL_TODO = [
  {
    name: 'Walk the dog',
    id: 1
  },
  {
    name: 'Water the plants',
    id: 2
  },
  {
    name: 'Wash the dishes',
    id: 3
  }
]

export default function Todo() {
  const [tasks, setTasks] = useState(INITIAL_TODO)
  const [newTask, setNewTask] = useState('')
  const [countID, setCountID] = useState(INITIAL_TODO.length + 1)

  const handleChange = (e) => {
    setNewTask(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    let newTaskObj = {
      name: newTask,
      id: countID
    }

    setTasks([...tasks, newTaskObj])
    setCountID(countID + 1)
    setNewTask('')
  }

  const handleDelete = (id) => {
    let filteredTasks = tasks.filter(task => task.id != id)
    setTasks(filteredTasks)
  }

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit} >
        <input type="text" placeholder="Add your task" onChange={handleChange} value={newTask}/>
        <div>
          <button>Submit</button>
        </div>
      </form>
      <ul>
        {tasks.map((task)=> (
          <li key={task.id}>
            <span>{task.name} </span>
            <button onClick={() => handleDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}