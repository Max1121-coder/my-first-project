import React from 'react';
import { TaskProvider } from './context/TaskContext';
import { APIProvider } from './api/APIProvider';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';

const App = () => {
  return (
    <TaskProvider>
      <APIProvider>
        <div className="app">
          <h1>To-Do App</h1>
          <AddTaskForm />
          <TaskList />
        </div>
      </APIProvider>
    </TaskProvider>
  );
};

export default App;
