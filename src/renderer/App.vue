<template>
  <v-app id="inspire">
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-title>APP name</v-toolbar-title>
      <v-spacer/>
      <v-btn icon @click="setFullScreen">
        <v-icon >fullscreen</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <app-fab/>
    <v-footer color="indigo" app>
      <span class="white--text">Jorge Chiquín Valderrama</span>
    </v-footer>
    <v-snackbar
      :timeout="3000"
      bottom
      right
      :color="snackbar.color"
      v-model="snackbar.show"
    >
      {{ snackbar.text }}
      <v-btn dark flat @click.native="snackbar.show = false" icon> 
        <v-icon>close</v-icon>
      </v-btn>
    </v-snackbar>
    <loading-dialog
      v-if="isFetching"
      :dialog="isFetching"
      :loaderMessage="loaderMessage"
    />
  </v-app>
</template>

<script>
import AppFab from '@/components/AppFab'
import LoadingDialog from '@/components/LoadingDialog'
export default {
  components: {
    AppFab,
    LoadingDialog
  },
  data: () => ({
    snackbar: {
      show: false,
      text: '',
      color: ''
    },
    countFetching: 0,
    loaderMessage: null
  }),
  computed: {
    isFetching () {
      return this.countFetching > 0
    }
  },
  created () {
    this.$on('show-message', this.showMessage)
    this.$on('fetching-request', this.handleFetchingRequest)
    window.getApp = this
  },
  methods: {
    setFullScreen () {
      const currentWindow = this.$electron.remote.getCurrentWindow()
      currentWindow.setFullScreen(!currentWindow.isFullScreen())
    },
    showMessage (text, color = 'success') {
      this.snackbar = {
        text,
        color,
        show: true
      }
    },
    handleFetchingRequest (fetching, loaderMessage) {
      this.countFetching += fetching ? 1 : -1
      this.loaderMessage = loaderMessage
    }
  }
}
</script>
