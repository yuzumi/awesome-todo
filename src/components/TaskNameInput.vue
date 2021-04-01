<template>
  <q-input
    dense
    label="Name"
    ref="name"
    :rules="rules"
    :value="name"
    @input="$emit('update:name', $event)"
  />
</template>

<script>
export default {
  name: 'TaskNameInput',
  props: {
    name: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      rules: [(value) => !!value || 'Field is required'],
    };
  },
};
</script>
