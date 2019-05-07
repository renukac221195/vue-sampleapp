<template>
  <v-layout class="container" align-center justify-center>
    <v-flex xs12 sm8 md4>
      <v-card dark color="blue-grey ">
        <v-spacer></v-spacer>
        <v-card-title class="title" align-center justify-center>
          <h1>Login</h1>
        </v-card-title>
        <v-card-text>
          <v-layout>
            <v-flex xs-12>
              <v-text-field
                class="input-field"
                v-model="username"
                :rules="usernameRules()"
                label="Username"
                type="username"
                required
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex xs-12>
              <v-text-field
                class="input-field"
                v-model="password"
                :rules="passwordRules()"
                label="Password"
                type="password"
                required
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex>
              <v-checkbox v-model="checkbox" label="Remember me"></v-checkbox>
            </v-flex>
          </v-layout>
          <v-layout align-center justify-center>
            <v-flex xs-6 offset-xs4>
              <v-card-actions>
                <v-btn class="btn1" color="success" @click="onLogin">Login</v-btn>
                <v-btn class="btn2" color="error" @click="onCancel">Cancel</v-btn>
              </v-card-actions>
            </v-flex>
          </v-layout>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      user: [],
      checkbox: false,
      flag: false
    };
  },
  computed: {
    userLogin() {
      return this.$store.getters.userLogin;
    },
    allUserFeeds() {
      return this.$store.getters.allUserFeeds;
    }
  },
  methods: {
    usernameRules() {
      return [v => !!v || "E-mail is required"];
    },
    passwordRules() {
      return [v => !!v || "Password is required"];
    },
    onLogin() {
      this.$store.dispatch("onLogin", "./static/Users.json").then(response => {
        response.data.user.forEach(element => {
          if (
            element.userId === this.username &&
            element.password === this.password
          ) {
            this.flag = true;
            this.$router.push("/UserHome");
          }
        });
        if (this.flag == false) {
          alert("Invalid User");
        }
      });
    },
    onCancel() {
      this.username = this.password = "";
    }
  }
};
</script>

<style scoped>
.title {
  font-family: "Cute Font", cursive;
  font-weight: bold;
  text-align: center;
}
.container {
  margin-top: 125px;
  
}

</style>
