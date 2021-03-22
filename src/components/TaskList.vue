<template>
  <q-list bordered separator>
    <task-item
      v-for="(task, id) of tasks"
      :key="id"
      :id="id"
      :task="task"
    />
  </q-list>
</template>

<script>
export default {
  name: 'TaskList',
  props: {
    tasks: {
      type: Object,
      default: () => ({}),
    },
  },
  components: {
    TaskItem: () => import('components/TaskItem.vue'),
  },
};
</script>
