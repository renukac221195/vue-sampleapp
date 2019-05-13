<template>
  <v-layout>
    <v-toolbar dark color="grey darken-4">
      <v-toolbar-title >Welcome</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        @input="searchFeeds"
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
      >Your search for "{{ searchFeeds }}" found no results.</v-alert>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-avatar class="mt-2" size="46px">
          <img :src="getCurrentUserData.dp" :alt="getCurrentUserData.name">
        </v-avatar>
        <v-toolbar-title class="mt-3 mr-4">{{getCurrentUserData.name}} {{getCurrentUserData.lastName}}</v-toolbar-title>
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
      currentUser: "",
      currentUserData: []
    };
  },
  methods: {
    onLogout() {
      this.$router.push("/");
    },
    searchFeeds(searchkey) {
      this.$store.dispatch("searchFeeds",searchkey);
    }
  },
  computed: {
    userLogin() {
      return this.$store.getters.userLogin;
    },
    getCurrentUserData() {
      return this.$store.getters.getCurrentUserData;
    },
  }
};
</script>

<style scoped>
</style>


