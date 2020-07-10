<template>
  <v-app>

    <!--member-->
    <v-navigation-drawer app clipped right :value="false">
      <member></member>
    </v-navigation-drawer>

    <!--header-->
    <v-app-bar app clipped-right color="blue-grey darken-3" dark>
      <v-app-bar-nav-icon @click.stop="channelDrawer = !channelDrawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Group Chat</v-toolbar-title>
      <v-spacer></v-spacer>
      <!--<v-app-bar-nav-icon @click.stop="memberDrawer = !memberDrawer"></v-app-bar-nav-icon>-->
    </v-app-bar>


    <v-navigation-drawer
        v-model="channelDrawer"
        app
    >
      <channel></channel>
    </v-navigation-drawer>


    <v-main>
      <!--<message></message>-->
      <router-view></router-view>
    </v-main>

  </v-app>
</template>

<script>
  import Member from './member.vue';
  import Channel from './channel.vue';
  export default {
    props: {
      source: String,
    },
    components: {
      Member,
      Channel
    },
    data: () => ({
      channelDrawer: false,
    }),
  }
</script>
