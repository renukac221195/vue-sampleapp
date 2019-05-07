<template>
  <v-card>
    <v-container fluid style="min-height: 0;" grid-list-lg>
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
          <v-flex xs10 v-if="!showFeed">
            <v-card v-for="item in filterFeeds" :key="item.id" class="my-4">
              <v-card v-for="(i, n) in item.pages" :key="n" class="my-3">
                <v-card-title>
                  <div>
                    <span class="grey--text">
                      <v-avatar size="36px">
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

                <v-card-media class="white--text" height="800px" :src="i.image">
                  <v-container fill-height fluid>
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox></v-flex>
                    </v-layout>
                  </v-container>
                </v-card-media>
                <v-card-actions>
                  <v-btn flat color="blue">Like</v-btn>
                  <v-btn flat color="blue" @click.native="textfield = true">Comment</v-btn>
                </v-card-actions>
              </v-card>
            </v-card>
          </v-flex>
          <!-- <v-flex xs10>
            <v-text-field v-model="textfield" name="input-7-1" label="Label Text" multi-line></v-text-field>
          </v-flex>-->

          <v-flex xs10 v-if="showFeed">
            <v-card v-for="item in feedType" :key="item.id" class="my-4">
              <div>
                <span class="grey--text">
                  <v-avatar size="36px">
                    <img :src="item.image" :alt="item.type">
                  </v-avatar>
                </span>
                <span>
                  <strong>{{ item.name }}</strong> uploaded a photo.
                </span>
                <br>
              </div>

              <v-card-title>{{item.title}}</v-card-title>

              <v-card-media class="white--text" height="800px" :src="item.image">
                <v-container fill-height fluid>
                  <v-layout fill-height>
                    <v-flex xs12 align-end flexbox></v-flex>
                  </v-layout>
                </v-container>
              </v-card-media>
              <v-card-actions>
                <p>{{ item.description }}</p>
              </v-card-actions>
              <v-card-actions>

                <v-btn flat color="blue">Like</v-btn>
                  <v-btn flat color="blue" @click.native="textfield = true">Comment</v-btn>
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
      newFeedList: [],
      userFeedList: [],
      result: null,
      feedType: [],
      textarea: false,
      showFeed: false
    };
  },
  created() {
    // this.$store
    //   .dispatch("fetchTypeOfFeeds", "/static/Feeds.json")
    //   .then(response => {
    //     this.newFeedList = response.data.feeds;

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
        // this.feedType = this.item.type;
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
    goToFeeds(val) {
      this.showFeed = true;
      this.filterFeeds.map(item => {
        if (item.type == val) {
          if (item.pages != undefined) {
            this.feedType = item.pages;
            return;
          }
        }
      });
      console.log(this.feedType);
    }
  }
};
</script>
