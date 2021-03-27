import { nanoid } from 'nanoid';

export const toggleTaskStatus = (state, id) => {
  state.tasks = {
    ...state.tasks,
    [id]: {
      ...state.tasks[id],
      completed: !state.tasks[id].completed,
    },
  };
};

export const deleteTask = (state, id) => {
  const { [id]: _, ...tasks } = state.tasks;
  state.tasks = tasks;
};

export const addTask = (state, task) => {
  state.tasks = {
    ...state.tasks,
    [nanoid()]: task,
  };
};
