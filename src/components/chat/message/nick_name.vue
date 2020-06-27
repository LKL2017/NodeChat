<template>
  <v-container class="bg-container cyan lighten-5">
    <v-row style="height: 100%">
      <v-spacer></v-spacer>
      <v-col cols="6" align-self="center">
        <!--<div class="prompt">What's your nickname ?</div>-->
        <v-text-field label="Input your nickname" v-model="nickname"
                      @change="gotoChat"></v-text-field>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
  </v-container>
</template>

<script>
  const {socket, EventType} = require('../../../util');
  export default {
    name: "nick_name",
    data () {
      return {
        nickname: '',
      }
    },
    methods: {
      gotoChat() {
        console.log('---',this.nickname)
        socket.emit(EventType.newUser, {nickname: this.nickname});
        this.$router.push({path: '/chat'});
      }
    }
  }
</script>

<style scoped>
  .bg-container {
    width: 100%;
    height: 100%;
  }
  .prompt {
    text-align: center;
    font-size: 24px;
  }
</style>
