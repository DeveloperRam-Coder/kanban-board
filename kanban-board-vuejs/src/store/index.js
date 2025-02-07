import { createStore } from "vuex";

export default createStore({
  state: {
    user: JSON.parse(localStorage.getItem("user")) || null,
    tasks: [
      { id: 1, title: "Learn Vue", status: "To-Do" },
      { id: 2, title: "Build a Kanban App", status: "In Progress" },
      { id: 3, title: "Deploy Project", status: "Done" }
    ]
  },
  mutations: {
    login(state, userData) {
      state.user = userData;
      localStorage.setItem("user", JSON.stringify(userData));
    },
    logout(state) {
      state.user = null;
      localStorage.removeItem("user");
    }
  },
  actions: {
    login({ commit }, userData) {
      if (userData.username === "admin" && userData.password === "password") {
        commit("login", userData);
      } else {
        alert("Invalid credentials!");
      }
    },
    logout({ commit }) {
      commit("logout");
    }
  },
  getters: {
    isAuthenticated: (state) => !!state.user,
    getTasks: (state) => state.tasks
  }
});
