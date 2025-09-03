import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios';
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

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

  const addTask = async(title, description) => {
    try{
      const newTask = {title: title, description: description, status:"pending"};
      const response = await axios.post('http://localhost:3001/tasks', newTask);
      setTasks([...tasks, response.data]);

    } catch(error){
      console.error("Failed to add task:", error);

    }
  }

  const deleteTask = async(id) => {
    try{

      await axios.delete('http://localhost:3001/tasks/'+id);
      setTasks(tasks.filter(task => task.id !== id));

    } catch (error){
      console.error("There was an error trying to delete the task: ", error);
    }
  }

  return (
    <div>
      <h1>to-do app</h1>
      <TaskForm onTaskCreate={addTask}/>
      <TaskList tasks={tasks} onTaskDelete={deleteTask}/>
    </div>
  );
}

export default App
