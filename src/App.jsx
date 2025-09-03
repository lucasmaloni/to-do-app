import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios';
import TaskForm from "./components/TaskForm";

function App() {
  const[tasks, setTasks] = useState([]);
  
  useEffect(()=> {
    const getTasks = async () => {
      try{
        const response = await axios.get("http://localhost:3001/tasks");
        setTasks(response.data);
      } catch(error){
        console.log("There was an error  trying to retrieve the data", error);
      }
    }

    getTasks();
  },[])

  function enlistTasks(){
      const taskList = tasks.map(task => <li key={task.id}>{task.title} - {task.description}</li>)
    
    return <ul>{taskList}</ul>
  }

  const addTask = async(title) => {
    try{
      const newTask = {title: title, description:"", status:"pending"};
      const response = await axios.post('http://localhost:3001/tasks', newTask);
      setTasks([...tasks, response.data]);
    } catch(error){
      console.error("Failed to add task:", error);
    }
  }

  return (
    <div>
      <h1>to-do app</h1>
      <TaskForm onTaskCreate={addTask}/>
      {enlistTasks()}
    </div>
  );
}

export default App
