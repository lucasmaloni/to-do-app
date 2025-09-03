import { useState } from "react";

function TaskForm({ onTaskCreate }){
    const [title, setTitle] = useState('');
    /*const [description, setDescription] = useState('');*/

    const handleSubmit = (submit) =>{
        submit.preventDefault();

        if (!title.trim()) return;

        onTaskCreate(title);

        setTitle('')
    }
    
    return(
        <div>
            <h2> Add a new Task </h2>
            <form onSubmit={handleSubmit}>
                <input type="text" 
                placeholder="Task Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
                <button type="submit">Add Task</button>
            </form>
        </div>
    );
}

export default TaskForm;