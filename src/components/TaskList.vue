<template>
  <q-list :bordered="hasTasks" separator>
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
  computed: {
    hasTasks() {
      return Object.keys(this.tasks).length > 0;
    },
  },
  components: {
    TaskItem: () => import('components/TaskItem.vue'),
  },
};
</script>
