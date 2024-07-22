import React, { useState } from 'react';
import axios from 'axios';

const TaskForm = ({ fetchTasks }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/api/tasks', { title, description, status, due_date: dueDate });
    fetchTasks();
    setTitle('');
    setDescription('');
    setStatus('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
      <input type="text" placeholder="Status" value={status} onChange={(e) => setStatus(e.target.value)} required />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
