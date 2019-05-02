<template>
  <v-app>
    <app-header></app-header>
    <v-container>
      <router-view></router-view>
    </v-container>
    <app-footer></app-footer>
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
  }
}
</script>

<style>

</style>
