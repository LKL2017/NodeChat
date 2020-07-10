<template>
  <div>
    <v-subheader>频道</v-subheader>

    <div>
      <v-dialog width="50%">
        <template v-slot:activator="{on, attrs}">
          <v-btn color="success" outlined v-bind="attrs" v-on="on">新建频道</v-btn>
        </template>
        <v-card>
          <v-card-title>新建频道</v-card-title>
          <v-card-text>121</v-card-text>
        </v-card>
      </v-dialog>

    </div>
    <div>
      <v-btn color="primary" outlined @click="switchChannel">切换频道(debug)</v-btn>
    </div>


  </div>
</template>

<script>
  import event_bus from "../../event_bus";
  import Util from '../../util';
  export default {
    name: "channel",
    data () {
      return {}
    },
    methods: {
      switchChannel () {
        event_bus.$emit(Util.EventType.switchChannel, {
          something: ''//
        });
      }
    }
  }
</script>

<style scoped>

</style>