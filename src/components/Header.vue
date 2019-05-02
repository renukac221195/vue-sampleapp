<template>
    <v-layout>
      <v-toolbar dark color="grey darken-4">
        <!-- <v-toolbar-title class="white--text">Welcome</v-toolbar-title> -->
        <v-spacer></v-spacer>
        <v-text-field
        v-model="search"
        append-icon="search"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
       <v-alert slot="no-results" :value="true" color="error" icon="warning">
        Your search for "{{ search }}" found no results.
      </v-alert>
         <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-toolbar-icon>
            <v-avatar size="36px">
              <img src="../assets/images/marissa.jpeg" alt="Marissa">
            </v-avatar>
          </v-toolbar-icon>
          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title>
                <v-router-link>
                  <v-btn flat>Username</v-btn>
                </v-router-link>
                <v-router-link>
                  <v-btn flat>Logout</v-btn>
                </v-router-link>
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-toolbar-items>
      </v-toolbar>
    </v-layout>
</template>
<script>
export default {
  components: {},
  data() {
    return {
        search: ''
    };
  }
};
</script>

<style scoped>

</style>


