<template>
  <v-card>
    <v-container fluid style="min-height: 0; max-width: 1000px" grid-list-lg>
      <v-layout column xs12>
        <v-layout row wrap xs12 offset-sm3>
          <v-flex xs2>
            <v-card class="my-4">
              <v-toolbar color="teal" dark>
                <v-toolbar-title>Feeds</v-toolbar-title>
              </v-toolbar>

              <v-list subheader v-for="(feed) in result" :key="feed">
                <v-list-tile @click="goToFeeds(feed)">
                  <v-list-tile-content>
                    <v-list-tile-title>{{feed}}</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-card>
          </v-flex>

          <v-flex xs10>
            <v-card class="my-4" v-for="item in newFeedList" :key="item.id">
              <v-card class="my-3" v-for="(i, n) in item.pages" :key="n">
                <v-card-title>
                  <div>
                    <span class="grey--text">
                      <v-avatar size="46px">
                        <img :src="item.dp" :alt="item.type">
                      </v-avatar>
                    </span>
                    <span>
                      <strong>{{ item.name }}</strong> uploaded a photo.
                    </span>
                    <br>
                  </div>
                </v-card-title>

                <v-card-title>{{i.title}}</v-card-title>
                <v-card-media class="white--text" height="500px">
                  <img :src="i.image" :alt="i.image">
                  <v-container fill-height fluid>
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox></v-flex>
                    </v-layout>
                  </v-container>
                </v-card-media>
                <v-card-actions>
                  <p>{{ i.description }}</p>
                </v-card-actions>
                <v-divider></v-divider>
                <v-card-actions>
                  <v-btn flat color="blue">Like</v-btn>
                  <v-btn flat color="blue" @click="flag = true">Comment</v-btn>
                </v-card-actions>
                <v-text-field multi-line v-if="flag" id="testing" name="input-1"></v-text-field>
              </v-card>
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
      newFeedList: [],
      userFeedList: [],
      result: null,
      feedType: [],
      flag: false,
      allFeedData: [],
      separateTypeFeed: [],
      tempArr: []
    };
  },
  created() {
    this.$store
      .dispatch("fetchTypeOfFeeds", "/static/Feeds.json")
      .then(response => {
        this.newFeedList = response.data.feeds;
        this.tempArr = response.data.feeds;
        this.result = [...new Set(response.data.feeds.map(item => item.type))];
        this.allFeedData = [
          ...new Set(
            response.data.feeds.map(item => {
              if (item.type) {
                return item;
              }
            })
          )
        ];
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
      // return this.$store.getters.filterFeeds;            //Alternative
      return this.allFeedData;
    }
  },
  methods: {
    goToFeeds(val) {
      this.newFeedList = [];
      this.separateTypeFeed = [];
      this.newFeedList = this.tempArr;
      this.newFeedList.filter(item => {
        if (item.type == val) {
          if (item.pages != undefined) {
            this.separateTypeFeed.push(item);
            this.feedType = item.pages;
          }
          return item.pages;
        }
      });
      this.newFeedList = this.separateTypeFeed;
    }
  }
};
</script>
<style>
</style>
