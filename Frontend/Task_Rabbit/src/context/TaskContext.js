import React, { createContext, useState } from 'react';
import axios from 'axios';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);

    const fetchTasks = async () => {
        try {
            const res = await axios.get('/api/tasks');
            setTasks(res.data);
        } catch (error) {
            console.error(error);
        }
    };

    const addTask = async (task) => {
        try {
            const res = await axios.post('/api/tasks', task);
            setTasks([...tasks, res.data]);
        } catch (error) {
            console.error(error);
        }
    };

    const updateTask = async (id, task) => {
        try {
            const res = await axios.put(`/api/tasks/${id}`, task);
            setTasks(tasks.map(t => (t._id === id ? res.data : t)));
        } catch (error) {
            console.error(error);
        }
    };

    const deleteTask = async (id) => {
        try {
            await axios.delete(`/api/tasks/${id}`);
            setTasks(tasks.filter(t => t._id !== id));
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <TaskContext.Provider value={{ tasks, fetchTasks, addTask, updateTask, deleteTask }}>
            {children}
        </TaskContext.Provider>
    );
};
