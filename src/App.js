import './App.css';
import {useState} from 'react'
import {Task} from './tasks'

function App() {
  const [todolist, settodolist] = useState([])
  const [inputValue, setinputValue] = useState("")

  const changing = (event) => {
    setinputValue(event.target.value)
  }

  const addTask = () => {
    const task = {
      id: todolist.length === 0 ? 1 : todolist[todolist.length - 1].id + 1,
      actualTask: inputValue,
      completed: false
    }
    settodolist([...todolist, task])
  }

  const deleteTask = (id) => {
    settodolist(todolist.filter((task) => task.id !== id))
  }

  const completeMark = (id) => {
    settodolist(todolist.map((task) => {
      if(task.id === id){
        return {...task, completed: true}
      }else{
        return task
      }
    }))
  } 
  
    return (

      <div className="App">

        <div className='main_container'>

          <div className="input_field_section">
            <input type = "text" id='Add_task_input_field' onChange={changing} placeholder="Type in your task...."/>
            <button id='Add_task_button' onClick={addTask}>+</button>
          </div>

          <div className="Tasks_added">
            {todolist.map((task) => {
              return(
                <Task taskName = {task.actualTask} id = {task.id} deleteTask = {deleteTask} completeTask = {completeMark} complete = {task.completed}/>
              )
            })}
          </div>
          
        </div>

      </div>
    );
}

export default App;
