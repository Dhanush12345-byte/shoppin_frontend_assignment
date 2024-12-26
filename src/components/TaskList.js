import React from 'react';

const TaskList = ({ tasks, onEdit, onDelete }) => (
  <div className="task-list">
    {tasks.map((task) => (
      <div className="task-card" key={task._id}>
        <h3>{task.name}</h3>
        <p>{task.description}</p>
        <p>Due: {new Date(task.dueDate).toLocaleDateString()}</p>
        <p>Status: {task.status}</p>
        <p>Priority: {task.priority}</p>
        <button onClick={() => onEdit(task)}>Edit</button>
        <button onClick={() => onDelete(task._id)}>Delete</button>
      </div>
    ))}
  </div>
);

export default TaskList;