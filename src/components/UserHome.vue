<template>
  <v-card>
    <v-container fluid style="min-height: 0; max-width: 1000px" grid-list-lg>
      <v-layout column xs12>
        <v-layout row wrap xs12 offset-sm3>
          <v-flex xs2>
            <v-card class="my-3">
              <v-toolbar color="teal" dark>
                <v-toolbar-title>Feeds</v-toolbar-title>
              </v-toolbar>
              <v-list subheader v-for="type in types" :key="type">
                <v-list-tile @click="changeType(type)">
                  <v-list-tile-content>
                    <v-list-tile-title>{{type}}</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-card>
          </v-flex>
          <v-flex xs10>
            <v-card class="my-3" v-for="feed in feeds" :key="feed.id">
              <v-card-title primary-title>
                <div>
                  <span>
                    <v-avatar size="40px">
                      <img :src="getUserInfo(feed).dp" :alt="getUserInfo(feed).name">
                    </v-avatar>
                  </span>
                  <span>
                    <strong class="blue--text">{{ feed.type }}</strong> uploaded a photo.
                  </span>
                  <br>
                </div>
              </v-card-title>
              <v-card-title class="black--text">{{feed.title}}</v-card-title>
              <v-card-media height="500px">
                <img :src="feed.image" :alt="feed.image">
                <v-container fill-height fluid>
                  <v-layout fill-height>
                    <v-flex xs12 align-end flexbox></v-flex>
                  </v-layout>
                </v-container>
              </v-card-media>
              <v-card-actions>
                <p>{{ feed.description }}</p>
              </v-card-actions>
              <v-divider></v-divider>
              <v-card-actions>
                <v-btn flat color="blue">Like</v-btn>
                <v-btn flat color="blue" @click="flag = true">Comment</v-btn>
              </v-card-actions>
              <v-text-field multi-line v-if="flag" id="testing" name="input-1"></v-text-field>
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
      feedType: "All",
      types: [],
      flag: false
    };
  },
  created() {
    if (this.$store.getters.getCurrentUserData) {
      this.$store
        .dispatch("fetchAllUserFeeds", "/static/Feeds.json")
        .then(response => {
          this.types = [...new Set(response.map(item => item.type))];
        });
    } else {
      this.$router.push("/");
    }
  },
  computed: {
    feeds() {
      if (this.feedType === "All") {
        return this.$store.getters.allUserFeeds;
      } else {
        return this.$store.getters.allUserFeeds.filter(
          f => f.type === this.feedType
        );
      }
    },
    userLogin() {
      return this.$store.getters.userLogin;
    }
  },
  methods: {
    getUserInfo(feed) {
      let temp = {};
      this.userLogin.map(u => {
        if (u.id == feed.userId) {
          temp = u;
          return u;
        }
      });
      return temp;
    },
    changeType(type) {
      this.feedType = type;
    }
  }
};
</script>