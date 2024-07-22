import React from 'react';
import axios from 'axios';

const TaskList = ({ tasks, fetchTasks }) => {
  const deleteTask = async (id) => {
    await axios.delete(`/api/tasks/${id}`);
    fetchTasks();
  };

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <h2>{task.title}</h2>
          <p>{task.description}</p>
          <p>Status: {task.status}</p>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
