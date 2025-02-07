<template>
  <div class="board">
    <h2>Kanban Board</h2>
    <div class="columns">
      <div class="column" v-for="status in statuses" :key="status">
        <h3>{{ status }}</h3>
        <KanbanTask v-for="task in filteredTasks(status)" :key="task.id" :task="task" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import KanbanTask from "./KanbanTask.vue";

export default {
  name: "KanbanBoard",
  components: { KanbanTask },
  computed: {
    ...mapGetters(["getTasks"]),
    statuses() {
      return ["To-Do", "In Progress", "Done"];
    },
    filteredTasks() {
      return (status) => this.getTasks.filter(task => task.status === status);
    }
  }
};
</script>
