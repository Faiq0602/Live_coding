import React, { useState, useContext, useEffect } from 'react';
import { TaskContext } from '../../context/TaskContext';

const TaskForm = ({ currentTask, setCurrentTask }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const { addTask, updateTask } = useContext(TaskContext);

    useEffect(() => {
        if (currentTask) {
            setTitle(currentTask.title);
            setDescription(currentTask.description);
        }
    }, [currentTask]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentTask) {
            updateTask(currentTask._id, { title, description });
        } else {
            addTask({ title, description });
        }
        setTitle('');
        setDescription('');
        setCurrentTask(null);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Task Title"
                required
            />
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Task Description"
            />
            <button type="submit">{currentTask ? 'Update Task' : 'Add Task'}</button>
        </form>
    );
};

export default TaskForm;
