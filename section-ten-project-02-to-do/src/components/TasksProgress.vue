<template>
  <div class="tasks-progress">
    <div class="progress-bar" :style="{width: progress + '%'}" />
  </div>
</template>

<script>
export default {
  props: {
    progress: {
      default: 0,
      type: Number,
    },
  },
};
</script>

<style>
.tasks-progress {
  position: relative;
  width: 349px;
  height: 10px;
  border: 1px solid #fff;
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;
}

.progress-bar {
  position: absolute;
  left: 0;
  height: 100%;
  border-radius: 5px;
  background: #4caf50;
}
</style>
