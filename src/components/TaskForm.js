import React, { useState } from 'react';

const TaskForm = ({ onSubmit, task }) => {
  const [formData, setFormData] = useState(task || {
    name: '',
    description: '',
    dueDate: '',
    status: 'Pending',
    priority: 'Low',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input name="name" placeholder="Task Name" value={formData.name} onChange={handleChange} required />
      <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
      <input type="date" name="dueDate" value={formData.dueDate} onChange={handleChange} required />
      <select name="status" value={formData.status} onChange={handleChange}>
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
      <select name="priority" value={formData.priority} onChange={handleChange}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <button type="submit">Save Task</button>
    </form>
  );
};

export default TaskForm;