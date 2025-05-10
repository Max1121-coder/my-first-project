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
      setError('Failed to fetch tasks. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const addTask = async (taskName) => {
    try {
      const response = await axios.post(API_URL, { name: taskName, completed: false });
      setTasks((prevTasks) => [...prevTasks, response.data]);
    } catch (err) {
      setError('Failed to add task. Please try again later.');
    }
  };

  const deleteTask = async (taskId) => {
    try {
      await axios.delete(`${API_URL}/${taskId}`);
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    } catch (err) {
      setError('Failed to delete task. Please try again later.');
    }
  };

  const toggleTaskCompletion = async (taskId) => {
    const task = tasks.find((task) => task.id === taskId);
    const updatedTask = { ...task, completed: !task.completed };

    try {
      await axios.put(`${API_URL}/${taskId}`, updatedTask);
      setTasks((prevTasks) =>
        prevTasks.map((task) => (task.id === taskId ? updatedTask : task))
      );
    } catch (err) {
      setError('Failed to update task. Please try again later.');
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
