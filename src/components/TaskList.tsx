import React from 'react';
import Task from './Task';

export default function TaskList({ loading, tasks }) {
  const LoadingRow = (
    <div className='loading-item'>
      <span className='glow-checkbox'></span>
      <span className='glow-text'>
        {' '}
        <span>Loading</span>
        <span>cool</span>
        <span>state</span>
      </span>
    </div>
  );
  if (loading) {
    return (
      <div className='list-item'>
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
      </div>
    );
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
