const filterTasks = (predicate) => (state) => (
  Object.fromEntries(
    Object.entries(state.tasks)
      .filter(predicate),
  )
);

export const todoTasks = filterTasks(([, task]) => !task.completed);

export const completedTasks = filterTasks(([, task]) => task.completed);
