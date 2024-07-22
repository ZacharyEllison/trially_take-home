import React from 'react';
import axios from 'axios';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';

const Tasks = ({ tasks }) => {
  return (
    <div>
      <h1>My Tasks</h1>
      <TaskForm />
      <TaskList tasks={tasks} />
    </div>
  );
};

export async function getServerSideProps() {
  const response = await axios.get('http://localhost:8000/tasks');
  const tasks = response.data;
  return { props: { tasks } };
}

export default Tasks;
