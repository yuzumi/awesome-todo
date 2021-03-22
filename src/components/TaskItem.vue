<template>
  <q-item
    v-ripple
    :class="task.completed ? 'bg-green-1' : 'bg-orange-1'"
    clickable
    @click="task.completed = !task.completed"
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
  </q-item>
</template>

<script>
export default {
  name: 'TaskItem',
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
};
</script>
