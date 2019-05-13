<template>
  <v-app>
    <app-header v-if="$route.name != 'LoginPage'"></app-header>
    <v-container>
      <router-view></router-view>
    </v-container>
    <app-footer v-if="$route.name != 'LoginPage'"></app-footer>
  </v-app>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    "app-header": Header,
    "app-footer": Footer
  },
  data() {
    return {
      show: false
    };
  },
  created() {
    this.$store.dispatch("onLogin", "./static/Users.json").then(() => {
      if (window.localStorage.username) {
        let currentUser = localStorage.getItem("username");

        this.$store.dispatch("setCurrentUser", currentUser);
      } else {
        this.$router.push("/");
      }
    });
  },
  computed: {
    checkUser() {
      if (this.$route.name != "LoginPage") {
        this.show = true;
      }
      return this.show;
    }
  }
};
</script>

<style>
</style>
