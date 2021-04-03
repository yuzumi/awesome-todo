<template>
  <q-page padding>
    <q-banner dense class="text-white bg-orange-4 q-mb-md">
      <span class="text-subtitle1">Todo</span>
    </q-banner>
    <task-list :tasks="todoTasks" />
    <q-separator class="q-my-md" />
    <q-banner dense class="text-white bg-green-4 q-mb-md">
      <span class="text-subtitle1">Completed</span>
    </q-banner>
    <task-list :tasks="completedTasks" />
    <new-task-form-modal @submit="addTask" />
  </q-page>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'Todo',
  computed: {
    ...mapGetters('tasks', ['todoTasks', 'completedTasks']),
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
