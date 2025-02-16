import React from 'react';
import Task from './Task';

export default function TaskList({ loading, tasks }) {
  if (loading) {
    return <div className='list-item'>Loading...</div>;
  }

  if (tasks.length === 0) {
    return <div className='list-item'>Empty...</div>;
  }

  return (
    <div className='list-items'>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
}
