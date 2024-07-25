import React, { useContext, useState } from 'react';
import { TaskContext } from '../../context/TaskContext';
import TaskForm from './TaskForm';

const TaskList = () => {
    const { tasks, deleteTask, fetchTasks } = useContext(TaskContext);
    const [currentTask, setCurrentTask] = useState(null);

    useEffect(() => {
        fetchTasks();
    }, [fetchTasks]);

    return (
        <div>
            <TaskForm currentTask={currentTask} setCurrentTask={setCurrentTask} />
            <ul>
                {tasks.map(task => (
                    <li key={task._id}>
                        <h3>{task.title}</h3>
                        <p>{task.description}</p>
                        <button onClick={() => setCurrentTask(task)}>Edit</button>
                        <button onClick={() => deleteTask(task._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
