import React, { useEffect } from 'react';
import axios from 'axios';
import { useTaskContext } from '../context/TaskContext';

const API_URL = 'https://your-backend-api.com/tasks';

export const APIProvider = ({ children }) => {
  const { tasks, setTasks, loading, setLoading, error, setError } = useTaskContext();

  const fetchTasks = async () => {
    setLoading(true);
    try {
      const response = await axios.get(API_URL);
      setTasks(response.data);
    } catch (err) {
      setError('Failed to fetch tasks');
    } finally {
      setLoading(false);
    }
  };

  const addTask = async (taskName) => {
    try {
      const response = await axios.post(API_URL, { name: taskName, completed: false });
      setTasks([...tasks, response.data]);
    } catch (err) {
      setError('Failed to add task');
    }
  };

  const deleteTask = async (taskId) => {
    try {
      await axios.delete(`${API_URL}/${taskId}`);
      setTasks(tasks.filter((task) => task.id !== taskId));
    } catch (err) {
      setError('Failed to delete task');
    }
  };

  const toggleTaskCompletion = async (taskId) => {
    const task = tasks.find((task) => task.id === taskId);
    const updatedTask = { ...task, completed: !task.completed };
    
    try {
      await axios.put(`${API_URL}/${taskId}`, updatedTask);
      setTasks(tasks.map((task) => (task.id === taskId ? updatedTask : task)));
    } catch (err) {
      setError('Failed to update task');
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <TaskContext.Provider value={{ tasks, setTasks, loading, setLoading, error, setError, addTask, deleteTask, toggleTaskCompletion }}>
      {children}
    </TaskContext.Provider>
  );
};
