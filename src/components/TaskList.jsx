
function TaskList({ tasks, onTaskDelete, onTaskEdit, editingTask }) {

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
                            <p> I'm editing the task:{task.title} </p>
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