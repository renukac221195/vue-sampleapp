<template>
  <v-card>
    <v-container fluid style="min-height: 0; max-width: 1000px" grid-list-lg>
      <v-layout column xs12>
        <v-layout row wrap xs12 offset-sm3>
          <v-flex xs2>
          </v-flex>
          <v-flex xs10>
            <v-card class="my-3">
              <v-card-title primary-title>
                <div>
                  <span>
                    <v-avatar size="40px">
                      <img :src="callUserInfo.dp" :alt="callUserInfo.name">
                    </v-avatar>
                  </span>
                  <span>
                    <strong class="blue--text">{{ getClickedFeed.type }}</strong>
                  </span>
                  <br>
                </div>
              </v-card-title>
              <v-card-title class="black--text">{{getClickedFeed.title}}</v-card-title>
              <v-card-media height="500px">
                <img :src="getClickedFeed.image" :alt="getClickedFeed.image">
                <v-container fill-height fluid>
                  <v-layout fill-height>
                    <v-flex xs12 align-end flexbox></v-flex>
                  </v-layout>
                </v-container>
              </v-card-media>
              <v-card-actions>
                <p>{{ getClickedFeed.description }}</p>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
import {getUserInfo} from '../UserInfo.js';
export default {
  data() {
    return {};
  },
  created() {
    if (!this.$store.getters.userLogin && !this.$store.getters.getClickedFeed) {
        this.$router.push("/");
    }
  },
  computed: {
    userLogin() {
      return this.$store.getters.userLogin;
    },
    getClickedFeed() {
        return this.$store.getters.getClickedFeed;
    },
    callUserInfo() {
      return getUserInfo(this.getClickedFeed, this.userLogin);
    }
  },
  methods: {}
};
</script>
