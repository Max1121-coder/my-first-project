import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

const useTasks = () => {
  const { tasks, setTasks, loading, setLoading, error, setError } = useContext(TaskContext);

  return { tasks, setTasks, loading, setLoading, error, setError };
};

export default useTasks;
