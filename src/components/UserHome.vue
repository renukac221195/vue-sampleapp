<template>
<v-card>
    <v-container
        fluid
        style="min-height: 0;"
        grid-list-lg
      >
  <v-layout column xs12>
    <v-layout row wrap xs12 offset-sm3>
      <v-flex xs2>
        <v-card>
          <v-toolbar color="teal" dark>
            <v-toolbar-title>Feeds</v-toolbar-title>
          </v-toolbar>

          <v-list subheader>
            <v-list-tile @click="goToFeeds">
              <v-list-tile-content>
                <v-list-tile-title>News Media</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-divider></v-divider>
            <v-list-tile @click="goToFeeds">
              <v-list-tile-content>
                <v-list-tile-title>Travel</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-divider></v-divider>
            <v-list-tile @click="goToFeeds">
              <v-list-tile-content>
                <v-list-tile-title>Photography</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-card>
      </v-flex>
      <v-flex xs10>
        <v-card>
          <v-card-title>
            <div>
              <span class="grey--text">
                <v-avatar size="36px">
                  <img src="../assets/images/marissa.jpeg" alt>
                </v-avatar>
              </span>
              <span>uploaded a photo.</span>
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
    <v-layout row wrap>
      <v-flex xs10 offset-xs2>
        <v-card>
          <v-card-title>
            <div>
              <span class="grey--text">
                <v-avatar size="36px">
                  <img src="../assets/images/marissa.jpeg" alt>
                </v-avatar>
              </span>
              <span>uploaded a photo.</span>
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
  </v-layout>
  </v-container>
</v-card>
</template>

<script>
export default {
  data() {
    return {
      user: []
    };
  },
  computed: {
    clickedFeed() {
      return this.$store.getters.clickedFeed;
    }
  },
  methods: {
    goToFeeds() {
      this.$store
        .dispatch("goToFeeds", "./static/Feeds.json")
        .then(response => {
          response.data.feeds.forEach(element => {
            if (element.type === this.type) {
              this.$router.push("/Feeds");
            }
          });
        });
    }
  }
};
</script>
