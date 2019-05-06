<template>
  <v-card>
    <v-container fluid style="min-height: 0;" grid-list-lg>
      <v-layout column xs12>
        <v-layout row wrap xs12 offset-sm3>
          <v-flex xs2>
            <v-card>
              <v-toolbar color="teal" dark>
                <v-toolbar-title>Feeds</v-toolbar-title>
              </v-toolbar>

              <v-list subheader v-for="(feed) in result" :key="feed.type">
                <v-list-tile @click="goToFeeds">
                  <v-list-tile-content>
                    <v-list-tile-title>{{feed}}</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-card>
          </v-flex>
          <v-flex xs10>
            <v-card v-for="users in userFeedList" :key="users.id">
              <v-card-title>
                <div>
                  <span class="grey--text">
                    <v-avatar size="36px">
                      <img :src="users.dp" :alt="users.name">
                    </v-avatar>
                  </span>
                  <span>
                    <strong>{{ users.name }} {{ users.lastName}}</strong> uploaded a photo.
                  </span>
                  <br>
                </div>
              </v-card-title>
              <v-card-media
                class="white--text"
                height="200px"
                :src="feed.image"
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
      user: [],
      feeds: [],
      newFeedList: [],
      dontAdd: false,
      userFeedList: [],
      result: null,
      feedType: ""
    };
  },
  created() {
    // this.$store
    //   .dispatch("fetchTypeOfFeeds", "/static/Feeds.json")
    //   .then(response => {
    //     this.newFeedList = response.data.feeds;

    //     // this.newFeedList.filter((v, i, a) => a.indexOf(v) === i);

    //     this.newFeedList = this.newFeedList.filter((item, index, arr) => {
    //       return arr.indexOf(item.type) === index;
    //     });
    //   });
    //   console.log(this.newFeedList);

    this.$store
      .dispatch("fetchTypeOfFeeds", "/static/Feeds.json")
      .then(response => {
        this.newFeedList = response.data.feeds;
        this.result = [...new Set(response.data.feeds.map(item => item.type))];
        // response.data.feeds.filter(item => {
        //   if (item.type !== this.newFeedList.type) {

        //     // console.log(this.feedType);
        //   }
        // });
        // console.log(this.result);
      });

    this.$store
      .dispatch("fetchAllUserFeeds", "/static/Users.json")
      .then(response => {
        this.userFeedList = response.data.user;
      });
  },
  computed: {
    clickedFeed() {
      return this.$store.getters.clickedFeed;
    },
    filterFeeds() {
      return this.$store.getters.filterFeeds;
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
