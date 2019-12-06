<template>
  <v-app id="inspire">
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title>Login form</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Login"
                    name="login"
                    prepend-icon="person"
                    type="text"
                    v-model="username"
                  />

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="lock"
                    type="password"
                    v-model="password"
                  />
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn color="primary" @click="login">Login</v-btn>
              </v-card-actions>
              <v-snackbar
                v-model="snackbar"
                :color="color"
                :top='true'
              >
                {{ errorMessages }}
                <v-btn
                  dark
                  flat
                  @click="snackbar = false"
                >
                  Close
                </v-btn>
              </v-snackbar>

            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data: function () {
    return {
      username: '',
      password: '',
      errorMessages: 'Incorrect login info',
      snackbar: false,
      color: 'general',
      showPassword: false
    }
  },

  // Sends action to Vuex that will log you in and redirect to the dash otherwise, error
  methods: {
    login: function () {
      let username = this.username
      let password = this.password
      this.$store.dispatch('login', { username, password })
        .then(() => this.$router.push('/dashboard'))
        .catch(err => {
          console.log(err)
          this.snackbar= true
        })
    }
  }
}
</script>