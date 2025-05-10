import React, { useState } from 'react';
import { useTaskContext } from '../context/TaskContext';

const AddTaskForm = () => {
  const { addTask } = useTaskContext();
  const [taskName, setTaskName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskName.trim()) {
      setErrorMessage('Task name cannot be empty.');
      return;
    }
    addTask(taskName);
    setTaskName('');
    setErrorMessage('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Enter a new task"
        />
        <button type="submit">Add Task</button>
      </form>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

export default AddTaskForm;
