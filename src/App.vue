<template>
  <v-app>
    <app-header v-if="checkUser"></app-header>
    <v-container>
      <router-view></router-view>
    </v-container>
    <app-footer v-if="checkUser"></app-footer>
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
    this.$store.dispatch("onLogin", "./static/Users.json");
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

<style scoped>
</style>
