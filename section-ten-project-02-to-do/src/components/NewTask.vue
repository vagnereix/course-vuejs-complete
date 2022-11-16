<template>
  <div class="new-task">
    <input
      class="form-element"
      name="Nova tarefa?"
      placeholder="Nova tarefa?"
      title="Nova tarefa?"
      type="text"
      v-model="name"
      @keydown.enter="add"
    >
    <button
      class="form-element"
      name="Adicionar nova tarefa"
      title="Adicionar nova tarefa"
      type="button"
      @click="add"
    >
      +
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
    };
  },
  methods: {
    add() {
      this.$emit('taskAdded', { name: this.name });
      this.name = '';
    },
  },
};
</script>

<style>
.new-task {
  margin: 10px;
}

.form-element {
  outline: none;
  font-size: 1.5rem;
  border: 1px solid #fff;

  padding: 5px 10px;
}

.new-task input {
  background: #fff2;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
}

.new-task input::placeholder {
  color: #fff8;
  font-weight: 200;
}

.new-task button {
  color: #0008;
  border-left: none;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
}
</style>
