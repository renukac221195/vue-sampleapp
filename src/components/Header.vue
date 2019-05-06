<template>
  <v-layout>
    <v-toolbar dark color="grey darken-4">
      <v-toolbar-title v-if="!flag">Welcome</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field
        v-if="flag"
        v-model="search"
        append-icon="search"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
      <v-alert
        slot="no-results"
        :value="true"
        color="error"
        icon="warning"
      >Your search for "{{ search }}" found no results.</v-alert>
      <v-spacer></v-spacer>
      <v-avatar v-if="flag" size="36px">
        <img src="../assets/images/marissa.jpeg" alt>
      </v-avatar>
      <v-toolbar-items>
        <!-- <v-router-link to="/UserHome" @click="goTo('/UserHome')">Username</v-router-link> -->
        <v-btn v-if="flag" flat @click="onLogout">Logout</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </v-layout>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      search: "",
      user: [],
      flag: false
    };
  },
  methods: {
    onLogout() {
      this.$router.push("/");
      this.flag = false;
    },
    // goTo(path) {
    //   this.$router.push(path);
    // }
  }
};
</script>

<style scoped>
</style>


