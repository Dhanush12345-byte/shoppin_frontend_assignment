import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import FilterBar from './components/FilterBar';
import './styles.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [statusFilter, setStatusFilter] = useState('');
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/api/tasks');
    const data = await res.json();
    setTasks(data);
  };

  const addOrUpdateTask = async (task) => {
    if (task._id) {
      await fetch(`http://localhost:5000/api/tasks/${task._id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(task),
      });
    } else {
      await fetch('http://localhost:5000/api/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(task),
      });
    }
    fetchTasks();
    setEditingTask(null);
  };

  const deleteTask = async (id) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      await fetch(`http://localhost:5000/api/tasks/${id}`, { method: 'DELETE' });
      fetchTasks();
    }
  };

  const filteredTasks = tasks.filter((task) =>
    statusFilter ? task.status === statusFilter : true
  );

  return (
    <div className="app">
      <h1>Task Tracker</h1>
      <FilterBar statusFilter={statusFilter} setStatusFilter={setStatusFilter} />
      <button onClick={() => setEditingTask({})}>Add Task</button>
      {editingTask && (
        <TaskForm
          task={editingTask}
          onSubmit={addOrUpdateTask}
        />
      )}
      <TaskList
        tasks={filteredTasks}
        onEdit={setEditingTask}
        onDelete={deleteTask}
      />
    </div>
  );
};

export default App;