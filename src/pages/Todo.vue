<template>
  <q-page padding>
    <task-list :tasks="tasks" />
  </q-page>
</template>

<script>
export default {
  name: 'Todo',
  data: () => ({
    tasks: [
      {
        id: 1,
        name: 'Name 1',
        completed: false,
        dueDate: '2021/04/12',
        dueTime: '18:30',
      },
      {
        id: 2,
        name: 'Name 2',
        completed: false,
        dueDate: '2021/04/09',
        dueTime: '17:15',
      },
      {
        id: 3,
        name: 'Name 3',
        completed: false,
        dueDate: '2021/03/20',
        dueTime: '12:00',
      },
    ],
  }),
  components: {
    TaskList: () => import('components/TaskList.vue'),
  },
};
</script>
