<template>
  <div class="task-grid">
    <template v-if="tasks.length">
      <Task
        v-for="(task, index) in tasks"
        :key="task.name"
        :task="task"
        @taskDeleted="$emit('taskDeleted', index)"
        @taskStateChanged="$emit('taskStateChanged', index)"
      />
    </template>
    <p v-else class="no-task">
      Sua vida está em dia.
    </p>
  </div>
</template>

<script>
import Task from './Task.vue';

export default {
  components: {
    Task,
  },
  props: {
    tasks: {
      type: Array,
      required: true,
      default: [],
    },
  },
};
</script>

<style>
.task-grid {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
}

.no-task {
  color: #aaa;
  font-size: 1.7rem;
}
</style>
