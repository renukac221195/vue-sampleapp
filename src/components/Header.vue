<template>
  <v-layout>
    <v-toolbar dark color="grey darken-4">
      <v-toolbar-title>Welcome</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field
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
      <v-toolbar-items>
        <v-avatar v-for="user in userLogin" :key="user.id" size="36px">
          <img :src="user.dp" :alt="user.name">
        </v-avatar>

        <!-- <v-router-link to="/UserHome" @click="goTo('/UserHome')">Username</v-router-link> -->
        <v-btn flat @click="onLogout">Logout</v-btn>
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
  computed: {
    userLogin() {
      return this.$store.getters.userLogin;
    }
  },
  methods: {
    onLogout() {
      this.$router.push("/");
      this.flag = false;
    }
    // goTo(path) {
    //   this.$router.push(path);
    // }
  }
};
</script>

<style scoped>
</style>


