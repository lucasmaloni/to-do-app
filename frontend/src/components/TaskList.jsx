import EditTaskForm from "./EditTaskForm";
import styles from './TaskList.module.css';

function TaskList({ tasks, onTaskDelete, onTaskUpdate, editingTask, onTaskEdit }) {

    if(tasks.length == 0){
        return <p>No tasks yet. Add one!</p>
    }

    return  (
        <div>
            <h2>Task List</h2>
            <ul className={styles.TaskList}>
                {tasks.map(task =>(
                    <li key={task.id} className={styles.TaskList}>
                        { editingTask && editingTask.id === task.id ? (
                            <EditTaskForm
                            taskToEdit={editingTask}
                            onSaveTask={onTaskUpdate}
                            />
                        ) : (
                        <>
                        <div className={styles.taskContent}>
                            <strong>{task.title}</strong>: {task.description}
                        </div>
                        <div className={styles.taskActions}>
                            <button onClick={() => onTaskEdit(task)} className={styles.editButton}>Edit Task</button>
                            <button onClick={() => onTaskDelete(task.id)} className={styles.deleteButton}>Delete</button>
                        </div>
                        </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TaskList;