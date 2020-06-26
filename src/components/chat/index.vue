<template>
  <v-app>

    <!--member-->
    <v-navigation-drawer app clipped right>
      <member></member>
    </v-navigation-drawer>

    <!--header-->
    <v-app-bar app clipped-right color="blue-grey darken-3" dark>
      <v-app-bar-nav-icon @click.stop="menuDrawer = !menuDrawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Group Chat</v-toolbar-title>
      <v-spacer></v-spacer>
      <!--<v-app-bar-nav-icon @click.stop="memberDrawer = !memberDrawer"></v-app-bar-nav-icon>-->
    </v-app-bar>


    <v-navigation-drawer
        v-model="menuDrawer"
        app
    >
      TODO
    </v-navigation-drawer>


    <v-main>
      <message></message>
    </v-main>

  </v-app>
</template>

<script>
  import Member from './member.vue';
  import Message from './message/index.vue';
  export default {
    props: {
      source: String,
    },
    components: {
      Member,
      Message
    },
    data: () => ({
      menuDrawer: null,
      memberDrawer: null,
    }),
  }
</script>
