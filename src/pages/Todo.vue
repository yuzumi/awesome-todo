<template>
  <q-page padding>
    <task-list :tasks="tasks" />
  </q-page>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Todo',
  computed: {
    ...mapState('tasks', ['tasks']),
  },
  components: {
    TaskList: () => import('components/TaskList.vue'),
  },
};
</script>
