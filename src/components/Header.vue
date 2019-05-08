<template>
  <v-layout wrap>
    <v-toolbar dark color="grey darken-4">
      <v-toolbar-title>Welcome</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>
      <v-alert
        slot="no-results"
        :value="true"
        color="error"
        icon="warning"
      >Your search for "{{ search }}" found no results.</v-alert>
      <v-spacer></v-spacer>
      <v-toolbar-items :search="search">
        <v-avatar class="mt-2" size="46px">
          <img :src="currentUserInfo.dp" :alt="currentUserInfo.name">
        </v-avatar>
        <v-toolbar-title class="mt-3 mr-4">{{currentUserInfo.name}} {{currentUserInfo.lastName}}</v-toolbar-title>
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
      flag: false,
      currentUser: "",
      currentUserData: []
    };
  },
  computed: {
    userLogin() {
      return this.$store.getters.userLogin;
    },
    currentUserInfo() {
      this.currentUser = localStorage.getItem("username");

      this.currentUserData = this.userLogin.find(element => {
        if (this.currentUser === element.userId) {
          return element;
        }
      });
      return this.currentUserData;
    }
  },
  methods: {
    onLogout() {
      localStorage.removeItem("username");
      this.$router.push("/");
      this.flag = false;
    }
  }
};
</script>

<style scoped>
</style>


