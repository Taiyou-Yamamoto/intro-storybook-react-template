import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { TasksSlice } from '../lib/store';
import TaskList from './TaskList';
import TaskStories from './Task.stories';

const MockedState = {
  tasks: [
    {
      ...TaskStories.Default.task,
      id: '1',
      title: 'Task 1',
    },
    {
      ...TaskStories.Default.task,
      id: '2',
      title: 'Task 2',
    },
    {
      ...TaskStories.Default.task,
      id: '3',
      title: 'Task 3',
    },
    {
      ...TaskStories.Default.task,
      id: '4',
      title: 'Task 4',
    },
    {
      ...TaskStories.Default.task,
      id: '5',
      title: 'Task 5',
    },
    {
      ...TaskStories.Default.task,
      id: '6',
      title: 'Task 6',
    },
  ],
  status: 'idle',
  error: null,
};

export default {
  component: TaskList,
  title: 'TaskList',
  decorators: [(story) => <div style={{ padding: '3rem' }}>{story()}</div>],
  tags: ['autodocs'],
  // excludeStories: /.*MockedState$/,
};

const Mockstore = ({ taskboxState, children }) => (
  <Provider
    store={configureStore({
      reducer: {
        taskbox: TasksSlice.reducer,
      },
      preloadedState: {
        taskbox: taskboxState,
      },
    })}
  >
    {children}
  </Provider>
);

// Defaultストーリー
export const Default = {
  decorators: [
    (story) => <Mockstore taskboxState={MockedState}>{story()}</Mockstore>,
  ],
};

// WithPinnedTasksストーリー（コメントアウトを解除）
export const WithPinnedTasks = {
  decorators: [
    (story) => {
      const pinnedTasks = [
        ...MockedState.tasks.slice(0, 5),
        { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' },
      ];

      return (
        <Mockstore taskboxState={{ ...MockedState, tasks: pinnedTasks }}>
          {story()}
        </Mockstore>
      );
    },
  ],
};

export const Loading = {
  decorators: [
    (story) => (
      <Mockstore taskboxState={{ ...MockedState, status: 'loading' }}>
        {story()}
      </Mockstore>
    ),
  ],
};

export const Empty = {
  decorators: [
    (story) => (
      <Mockstore taskboxState={{ ...MockedState, tasks: [] }}>
        {story()}
      </Mockstore>
    ),
  ],
};
