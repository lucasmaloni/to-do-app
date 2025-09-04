import EditTaskForm from "./EditTaskForm";

function TaskList({ tasks, onTaskDelete, onTaskUpdate, editingTask, onTaskEdit }) {

    if(tasks.length == 0){
        return <p>No tasks yet. Add one!</p>
    }

    return  (
        <div>
            <h2>Task List</h2>
            <ul>
                {tasks.map(task =>(
                    <li key={task.id}>
                        { editingTask && editingTask.id === task.id ? (
                            <EditTaskForm
                            taskToEdit={editingTask}
                            onSaveTask={onTaskUpdate}
                            />
                        ) : (
                        <div>
                            <strong>{task.title}</strong>: {task.description}
                            <button onClick = {() => onTaskEdit(task)}>Edit Task</button>
                            <button onClick={() => onTaskDelete(task.id)}>Delete</button>
                        </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TaskList;