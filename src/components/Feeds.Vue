<template>
  <v-layout>
    <v-flex xs10>
      <v-card v-for="feed in feeds" :key="feed.id">
        <v-card-title>
          <div>
            <span class="grey--text">
              <v-avatar size="36px">
                <img :src="users.dp" alt>
              </v-avatar>
            </span>
            <span>
              <strong>{{ feed.type }}</strong> uploaded a photo.
            </span>
            <br>
          </div>
        </v-card-title>
        <v-card-media
          class="white--text"
          height="200px"
          src="../assets/images/yourstory/feed_1.png"
        >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox></v-flex>
            </v-layout>
          </v-container>
        </v-card-media>
        <v-card-actions>
          <v-btn flat color="blue">Like</v-btn>
          <v-btn flat color="blue">Comment</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      arrUserFeeds: []
    };
  },
  created() {
    this.$store.dispatch("");
  }
};
</script>
