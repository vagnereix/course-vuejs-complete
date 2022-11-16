<template>
  <div
    class="task"
    :class="stateClass"
    @click="$emit('taskStateChanged', task)"
  >
    <span class="close" @click.stop="$emit('taskDeleted', task)">x</span>
    <p>{{ task.name }}</p>
  </div>
</template>

<script>
export default {
  props: {
    task: {
      default: {},
      required: true,
      type: Object,
    },
  },
  computed: {
    stateClass() {
      return {
        done: !this.task.pending,
        pending: this.task.pending,
      };
    },
  },
};
</script>

<style>
.task {
  position: relative;
  box-sizing: border-box;
  width: 350px;
  height: 150px;
  padding: 10px;
  border-radius: 8px;
  font-size: 2rem;
  font-weight: 300;

  display: grid;
  place-items: center;

  cursor: pointer;
  user-select: none;
}

.done {
  border-left: 12px solid #0a8f08;
  background: #4caf50;
  text-decoration: line-through;
}
.done .close {
  background: #0a8f08;
}

.pending {
  border-left: 12px solid #b73229;
  background: #f44336;
}
.pending .close {
  background: #b73229;
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 0.9rem;
  font-weight: 600;

  width: 20px;
  height: 20px;
  border-radius: 50%;

  display: flex;
  justify-content: center;
}
</style>
