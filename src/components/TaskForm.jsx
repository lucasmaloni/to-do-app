import { useState } from "react";

function TaskForm({ onTaskCreate }){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (submit) =>{
        submit.preventDefault();

        if (!title.trim()) return;

        if (!description.trim()) return;

        onTaskCreate(title, description);

        setTitle('');
        setDescription('');
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
                <br/>
                <input type="text"
                placeholder="Task description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                />
                <br/>
                <button type="submit">Add Task</button>
            </form>
        </div>
    );
}

export default TaskForm;