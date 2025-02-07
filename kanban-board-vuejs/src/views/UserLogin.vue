<template>
  <div class="login">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <input type="text" placeholder="Username" v-model="username" />
      <input type="password" placeholder="Password" v-model="password" />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "UserLogin",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login() {
      console.log("Logging in:", this.username);
    }
  }
};
</script>
