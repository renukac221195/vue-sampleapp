<template>
  <v-app>
    <app-header v-if="checkUser.length > 0"></app-header>
    <v-container>
      <router-view></router-view>
    </v-container>
    <app-footer v-if="checkUser.length > 0"></app-footer>
  </v-app>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: 'App',
  components: {
    "app-header": Header,
    "app-footer": Footer,
  },
  data() {
    return {
      
    }
  },
  computed: {
    checkUser() {
      console.log(this.$store.getters.userLogin);
      
      return this.$store.getters.userLogin;
    }
  }
  // methods: {
  //   onLogin() {
  //     this.$store.dispatch("onLogin","./static/Users.json");
  //   }
  // }
}
</script>

<style>

</style>
