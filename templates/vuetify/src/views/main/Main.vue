<template>
  <v-app id="main">

    <Navigation />
    <AppBar />

    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>      
    </v-content>


    <v-btn bottom color="pink" dark fab fixed right @click="showContactForm = !showContactForm">
      <v-icon>add</v-icon>
    </v-btn>

    <create-contact title="Create Contact" show-dialogue="true">
    </create-contact>

  </v-app>
</template>


<script>
import Navigation from "./components/layout/Navigation";
import AppBar from "./components/layout/AppBar";
import CreateContact from "./components/dialogues/CreateContact";

export default {
  name: "App",
  components: {
    Navigation,
    AppBar,
    CreateContact,
  },
  computed: {
  },
  data: () => ({
    showContactForm: false,
  }),
  methods: {
  }
};
</script>
