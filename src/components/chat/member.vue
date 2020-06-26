<template>
  <div>
    <v-subheader>当前成员 (10/108)</v-subheader>
    <v-list>
      <v-list-item v-for="item in member_list" :key="item.name">
        <v-hover v-slot:default="{hover}">
          <v-row align="center" :class="{'member-row-hover': hover}">
            <v-col cols="2"><u-avatar :user="item" :size="36"></u-avatar></v-col>
            <v-col cols="8">
              {{item.name}}
              <div v-if="item.state" style="font-size: 12px; color: #aaa;">{{item.state}}</div>
            </v-col>
          </v-row>
        </v-hover>
      </v-list-item>
    </v-list>
  </div>

</template>

<script>
  import UAvatar from '../common/user_avatar'
  export default {
    name: "Member",
    components: {
      UAvatar
    },
    data () {
      return {
        member_list: [
          {name: '张三', state: 'listening music...'},
          {name: '李四'},
          {name: '王五'},
        ]
      }
    }
  }
</script>

<style scoped>
  .member-row-hover {
    background: #eee;
    cursor: pointer;
  }
</style>
