<template>
  <q-page padding>
    <task-list :tasks="tasks" />
    <new-task-form-modal @submit="addTask" />
  </q-page>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'Todo',
  computed: {
    ...mapState('tasks', ['tasks']),
  },
  methods: {
    ...mapMutations('tasks', ['addTask']),
  },
  components: {
    TaskList: () => import('components/TaskList.vue'),
    NewTaskFormModal: () => import('components/NewTaskFormModal.vue'),
  },
};
</script>
