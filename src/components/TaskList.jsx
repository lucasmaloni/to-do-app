
function TaskList({ tasks, onTaskDelete }) {

    if(tasks.length == 0){
        return <p>No tasks yet. Add one!</p>
    }

    return  (
        <div>
            <h2>Task List</h2>
            <ul>
                {tasks.map(task =>(
                    <li key={task.id}>
                        <strong>{task.title}</strong>: {task.description}
                        <button onClick={() => onTaskDelete(task.id)}> 
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TaskList;