<template>
  <div>
    <div class="absolute-bottom text-center q-ma-md">
      <q-btn
        round
        size="md"
        color="primary"
        icon="eva-plus-outline"
        @click="openModal"
      />
    </div>

    <q-dialog v-model="modal" persistent>
      <q-card>
        <form @submit.prevent="submit">
          <q-card-section>
            <h6 class="q-ma-none">Task</h6>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <task-name-input :name.sync="task.name" ref="nameInput" />

            <task-due-date-input :due-date.sync="task.dueDate" ref="dueDateInput" />

            <task-due-time-input :due-time.sync="task.dueTime" ref="dueTimeInput" />
          </q-card-section>

          <q-card-actions align="right" class="text-primary">
            <q-btn flat label="Cancel" color="red" v-close-popup />
            <q-btn flat label="Add" type="submit" />
          </q-card-actions>
        </form>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  name: 'NewTaskFormModal',
  data() {
    return {
      modal: false,
      task: {
        name: '',
        completed: false,
        dueDate: '',
        dueTime: '',
      },
    };
  },
  methods: {
    openModal() {
      this.modal = true;
    },
    closeModal() {
      this.modal = false;
    },
    isValid() {
      const fields = [
        this.$refs.nameInput.$refs.name,
        this.$refs.dueDateInput.$refs.dueDate,
        this.$refs.dueTimeInput.$refs.dueTime,
      ];

      fields.forEach((field) => field.validate());

      return fields.every((field) => !field.hasError);
    },
    submit() {
      if (this.isValid()) {
        this.$emit('submit', this.task);
        this.closeModal();
      }
    },
  },
  components: {
    TaskNameInput: () => import('components/TaskNameInput.vue'),
    TaskDueDateInput: () => import('components/TaskDueDateInput.vue'),
    TaskDueTimeInput: () => import('components/TaskDueTimeInput.vue'),
  },
};
</script>
