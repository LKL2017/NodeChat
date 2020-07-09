<template>
  <div>
    <v-container class="history-message-box">
      <template v-for="item in hm">
        <v-hover v-slot:default="{hover}" :key="item.id" >
          <v-row v-if="item.type & chat_type" :class="{'is-row-hover': hover}">
            <v-col cols="1" align-self="center">
              <u-avatar v-if="item.type & MessageType.other" :user="item"></u-avatar>
            </v-col>
            <v-col cols="10" :class="{'self-message': item.type & MessageType.self}">
              <div class="name-and-time">
                <span class="font-weight-bold">{{item.user}}</span>
                <span style="margin-left: 8px; color: #bbb; font-size: 12px">{{item.deliver}}</span>
              </div>
              {{item.message}}</v-col>
            <v-col cols="1">
            <span v-if="(item.type & MessageType.other) && hover" class="message-operation">
              <v-icon small style="margin-right: 8px">fas fa-quote-left</v-icon>
              <v-icon small>fas fa-ellipsis-h</v-icon>
            </span>
              <u-avatar v-else-if="item.type & MessageType.self" :user="item"></u-avatar>
            </v-col>
          </v-row>
          <v-row v-else-if="item.type & MessageType.welcome">
            {{item.nickname}}已加入
          </v-row>
        </v-hover>
      </template>
    </v-container>

    <div class="input-box">
      <v-textarea v-model="user_input" :rows="3" @keydown.enter.prevent="sendMessage"
                  :auto-grow="true" outlined
      >
        <span slot="append">
          <v-btn v-for="item in append_buttons" icon color="grey" :key="item.icon">
            <v-icon>{{item.icon}}</v-icon>
          </v-btn>
        </span>
      </v-textarea>
    </div>
  </div>
</template>

<script>
  import UAvatar from '../../common/user_avatar';
  const {EventType, MessageType, getNow, PORT} = require('../../../util');
  const socket = require('socket.io-client')(`http://localhost:${PORT}`);

  export default {
    name: "Message",
    components: {
      UAvatar,
    },
    data () {
      return {
        nickname: '',
        hm: [],
        user_input: '',
        append_buttons: [
          {icon: 'fas fa-smile'},
          {icon: 'fas fa-plus'},
          {icon: 'fas fa-gamepad'},
        ],
        MessageType,
        chat_type: MessageType.self | MessageType.other,
      }
    },
    mounted () {
      this.bindReceive();
      this.joinRoom(); //绑定事件之后触发才生效
    },
    methods: {
      sendMessage() {
        if (this.user_input !== '') {
          let data = {
            user: this.nickname,
            message: this.user_input,
            deliver: getNow()
          };
          socket.emit(EventType.newMessage, data);
          // console.log('send: ', this.user_input);
          this.addNewMessage(data, MessageType.self);
          this.user_input = '';
        }
      },
      addNewMessage(data, type) {
        console.log('add', type);
        this.hm.push({...data, type});
      },
      joinRoom() {
        let name = this.$route.params.nickname;
        socket.emit(EventType.newUser, {nickname: name});
        socket.emit(EventType.welcome, {nickname: name});
      },
      bindReceive() {
        socket.on(EventType.newUser, data => {
          console.log(`rrrrr`, data);
          this.nickname = data.nickname;
        })
        socket.on(EventType.newMessage, data => {
          this.addNewMessage(data, MessageType.other);
        });
        socket.on(EventType.welcome, data => {
          this.addNewMessage(data, MessageType.welcome);
          console.log('welcome, ' ,data)
        });
      }

    }
  }
</script>

<style scoped>
  .history-message-box {
    height: calc(100vh - 160px);
    overflow: scroll;
  }
  .input-box {
    position: absolute;
    bottom: 16px;
    width: 100%;
    min-height: 40px;
    max-height: 80px;
    padding: 8px 20px
  }
  .is-row-hover {
    background: #eee;
  }
  .self-message {
    text-align: right;
  }
  .message-operation .v-icon{
    cursor: pointer;
  }
  .message-operation .v-icon:hover{
    opacity: 0.5;
  }
</style>
