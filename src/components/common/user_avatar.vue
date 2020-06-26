<template>
  <v-avatar color="blue accent-1" :size="size">
    <img v-if="user.src" :src="user.src" alt="">
    <v-icon v-else color="white">fas fa-user</v-icon>
  </v-avatar>
</template>

<script>
  export default {
    name: "u_avatar",
    data () {
      return {}
    },
    props: {
      user: Object,
      size: {
        type: Number,
        default: 48
      }
    }
  }
</script>

<style scoped>

</style>
