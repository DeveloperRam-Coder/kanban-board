<template>
  <nav class="navbar" :class="{ dark: isDarkMode }">
    <h1>Kanban App</h1>
    <button @click="toggleDarkMode">
      {{ isDarkMode ? "🌙 Dark Mode" : "☀️ Light Mode" }}
    </button>
  </nav>
</template>

<script>
export default {
  name: "AppNavbar",
  data() {
    return {
      isDarkMode: false, // Default is light mode
    };
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      document.body.classList.toggle("dark-mode", this.isDarkMode);
    },
  },
};
</script>

<style scoped>
/* Navbar Styling */
.navbar {
  /* position: fixed; */
  top: 0;
  width: 100%;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  backdrop-filter: blur(10px); /* Blurred Background */
  transition: background 0.3s ease-in-out;
  z-index: 1000;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

/* Light Mode */
.navbar {
  background: rgba(255, 255, 255, 0.3);
  color: black;
}

/* Dark Mode */
.navbar.dark {
  background: rgba(0, 0, 0, 0.3);
  color: white;
}

/* Button Styling */
button {
  padding: 8px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s;
}

/* Light Mode Button */
button {
  background: white;
  color: black;
}

/* Dark Mode Button */
.navbar.dark button {
  background: black;
  color: white;
}

/* Dark Mode for Body */
.dark-mode {
  background-color: #121212;
  color: white;
  transition: background 0.3s ease-in-out;
}
</style>
