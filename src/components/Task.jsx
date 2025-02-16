import PropTypes from 'prop-types';

// type TaskProps = {
//   task: {
//     id: number;
//     title: string;
//     state: string;
//   };
// };

export default function Task({ task: { id, title, state } }) {
  return (
    <div className={`list-item ${state}`}>
      <label
        htmlFor='checked'
        className='checkbox'
        aria-label={`archiveTask-${id}`}
      >
        <input
          type='checkbox'
          value={title}
          name='checked'
          id={`archiveTask-${id}`}
        />
        <span className='checkbox-custom'></span>
      </label>
      <label htmlFor='title' className='title' aria-label={title}>
        <input type='text' value={title} readOnly={true} name='title' />
      </label>

      {state !== 'TASK_ARCHIVED' && (
        <button
          className='pin-button'
          id={`pinTask-${id}`}
          aria-label={`pinTask-${id}`}
        >
          <span className='icon-star'></span>
        </button>
      )}
    </div>
  );
}

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  }),
};
