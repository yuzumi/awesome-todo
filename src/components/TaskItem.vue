<template>
  <q-item
    v-ripple
    :class="task.completed ? 'bg-green-1' : 'bg-orange-1'"
    clickable
    @click="toggleTaskStatus(id)"
  >
    <q-item-section side top>
      <q-checkbox v-model="task.completed" />
    </q-item-section>

    <q-item-section>
      <q-item-label
        :class="{ 'text-strike': task.completed }"
      >
        {{ task.name }}
      </q-item-label>
    </q-item-section>

    <q-item-section side>
      <q-item-label>
        {{ task.dueDate }}
      </q-item-label>
      <q-item-label caption>
        {{ task.dueTime }}
      </q-item-label>
    </q-item-section>

    <q-item-section side>
      <q-btn
        flat
        round
        color="red"
        icon="eva-trash-2-outline"
        dense
        @click.stop="promptToDelete(id)"
      />
    </q-item-section>
  </q-item>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'TaskItem',
  props: {
    id: {
      type: String,
      required: true,
    },
    task: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapMutations('tasks', ['toggleTaskStatus', 'deleteTask']),

    promptToDelete(id) {
      this.$q.dialog({
        title: 'Confirm',
        message: 'Are you sure you want to delete this task?',
        cancel: true,
      }).onOk(() => {
        this.deleteTask(id);
      });
    },
  },
};
</script>
