<template>
  <div>
    <AppNavbar />
    <KanbanBoard />
  </div>
</template>

<script>
import AppNavbar from "../components/AppNavbar.vue";
import KanbanBoard from "../components/KanbanBoard.vue";

export default {
  name: "UserDashboard",
  components: {
    AppNavbar,
    KanbanBoard
  }
};
</script>
