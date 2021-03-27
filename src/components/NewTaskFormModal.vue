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
            <q-input
              dense
              v-model.trim="task.name"
              label="Name"
              :rules="[value => !!value || 'Field is required']"
              ref="name"
            />

            <q-input
              dense
              v-model="task.dueDate"
              mask="date"
              label="Due date"
              :rules="['date']"
              ref="dueDate"
            >
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                    <q-date v-model="task.dueDate" minimal>
                      <div class="row items-center justify-end">
                        <q-btn v-close-popup label="Close" color="primary" flat />
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>

            <q-input
              dense
              v-model="task.dueTime"
              mask="time"
              label="Due time"
              :rules="['time']"
              ref="dueTime"
            >
              <template v-slot:append>
                <q-icon name="access_time" class="cursor-pointer">
                  <q-popup-proxy transition-show="scale" transition-hide="scale">
                    <q-time v-model="task.dueTime">
                      <div class="row items-center justify-end">
                        <q-btn v-close-popup label="Close" color="primary" flat />
                      </div>
                    </q-time>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
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
        this.$refs.name,
        this.$refs.dueDate,
        this.$refs.dueTime,
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
};
</script>
