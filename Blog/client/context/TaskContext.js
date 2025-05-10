import React, { createContext, useState, useContext } from 'react';

const TaskContext = createContext();

export const useTaskContext = () => useContext(TaskContext);

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <TaskContext.Provider value={{ tasks, setTasks, loading, setLoading, error, setError }}>
      {children}
    </TaskContext.Provider>
  );
};
