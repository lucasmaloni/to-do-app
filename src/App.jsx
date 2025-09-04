import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios';
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const[tasks, setTasks] = useState([]);
  const[editingTask, setEditingTask] = useState(null)

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

      await axios.delete(`http://localhost:3001/tasks/${id}`);
      setTasks(tasks.filter(task => task.id !== id));

    } catch (error){
      console.error("There was an error trying to delete the task: ", error);
    }
  }

  const handleEditClick = (task) => {
    console.log("O app recebeu a ordem para editar a tarefa", task);
    setEditingTask(task);
  };

  const handleUpdateTask = async (updatedTask) => {
    try {
      console.log("it is supposed to work")
      const response = await axios.put(`http://localhost:3001/tasks/${updatedTask.id}`, updatedTask);
      setTasks(tasks.map(task => task.id === updatedTask.id ? response.data : task));
      setEditingTask(null);

    } catch (error){
      console.error("Failed to update Task: ", error);

    }
  };

  return (
    <div>
      <h1>to-do app</h1>
      <TaskForm onTaskCreate={addTask}/>
      <TaskList 
      tasks={tasks}
      editingTask={editingTask}
      onTaskEdit={handleEditClick}
      onTaskUpdate={handleUpdateTask}
      onTaskDelete={deleteTask}
      />
    </div>
  );
}

export default App
