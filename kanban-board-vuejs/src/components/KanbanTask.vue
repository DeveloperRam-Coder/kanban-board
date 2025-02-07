<template>
  <div class="task">
    <p>{{ task.title }}</p>
  </div>
</template>

<script>
export default {
  name: "KanbanTask",
  props: {
    task: Object
  }
};
</script>
