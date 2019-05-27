<template>
  <v-container grid-list-xl fluid>
    <v-layout justify-center wrap>
      <v-img id="logo" src="static/logo.png" alt="electron-vue"/>
    </v-layout>
      <div class="display-2"><b>Electron: </b>{{ system.electron }}</div>
      <div class="display-2"><b>Node: </b>{{ system.node }}</div>
      <div class="display-2"><b>Platform: </b>{{ system.platform }}</div>
      <div class="display-2"><b>Vue: </b>{{ system.vue }}</div>
      <div class="display-2"><b>Route name: </b>{{ system.name }}</div>
      <div class="display-2"><b>Route path: </b>{{ system.path }}</div>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    system: {}
  }),
  mounted () {
    this.system = {
      electron: process.versions.electron,
      name: this.$route.name,
      node: process.versions.node,
      path: this.$route.path,
      platform: require('os').platform(),
      vue: require('vue/package.json').version
    }
  }
}
</script>

<style >

</style>
