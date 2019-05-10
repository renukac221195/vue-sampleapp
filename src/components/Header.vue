<template>
  <v-layout wrap>
    <v-toolbar dark color="grey darken-4">
      <v-toolbar-title>Welcome to Vue-App</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="search"
        label="Search"
        @input="filterSearch"
        single-line
        hide-details
      ></v-text-field>
      <!-- <template>
        <v-list-tile v-for="item in getSearchedItem" :key="item.id">
          <v-list-tile-title>{{ item }}</v-list-tile-title>
        </v-list-tile>
      </template> -->
      <v-alert
        slot="no-results"
        :value="true"
        color="error"
        icon="warning"
      >Your search for "{{ search }}" found no results.</v-alert>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-avatar class="mt-2" size="46px">
          <img :src="currentUserInfo.dp" :alt="currentUserInfo.name">
        </v-avatar>
        <v-toolbar-title class="mt-3 mr-4">{{currentUserInfo.name}} {{currentUserInfo.lastName}}</v-toolbar-title>
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
      currentUserData: [],
      filterList: []
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
    },
    filterFeeds() {
      return this.$store.getters.filterFeeds;
    },
    getSearchedItem() {
      return this.$store.getters.getSearchedItem;
    }
  },
  methods: {
    onLogout() {
      localStorage.removeItem("username");
      this.$router.push("/");
    },
    filterSearch(event) {
      this.$store.dispatch("fetchSearchedItem", {url: "/static/Feeds.json", str: event});
      return event;
    }
  }
};
</script>

<style scoped>
</style>


