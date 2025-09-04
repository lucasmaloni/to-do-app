import { useState } from "react";
import styles from './EditTaskForm.module.css';

function EditTaskForm({ taskToEdit, onSaveTask }){
    const [updatedTitle, setUpdatedTitle] = useState(taskToEdit.title);
    const [updatedDescription, setUpdatedDescription] = useState(taskToEdit.description);

    const handleSubmit = (e) => {
        e.preventDefault();

        onSaveTask({...taskToEdit, title: updatedTitle, description: updatedDescription });
    };

    return (
        <form onSubmit={handleSubmit} className={styles.editForm}>
            <input 
            type="text"
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
            />
            <input 
            type="text"
            value={updatedDescription}
            onChange={(e) => setUpdatedDescription(e.target.value)}
            />
            <button type="submit">Save</button>
        </form>
    );
}

export default EditTaskForm;