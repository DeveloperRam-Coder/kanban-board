<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "AppMain"
};
</script>

<style>
/* Global styles */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #ff0000;
}

#app {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
