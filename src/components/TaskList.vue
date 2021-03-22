<template>
  <q-list bordered separator>
    <task-item
      v-for="task of tasks"
      :key="task.id"
      :task="task"
    />
  </q-list>
</template>

<script>
export default {
  name: 'TaskList',
  props: {
    tasks: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    TaskItem: () => import('components/TaskItem.vue'),
  },
};
</script>
