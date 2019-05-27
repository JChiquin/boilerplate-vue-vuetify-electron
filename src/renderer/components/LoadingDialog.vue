<template>
  <v-dialog
      v-model="dialog"
      persistent
      max-width="30%"
    >
      <v-card
        color="primary"
        dark
      >
        <v-card-text>
          {{ loaderMessage }}
          <v-progress-linear
            indeterminate
            color="white"
            class="mb-0"
          ></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
</template>

<script>
export default {
  props: {
    dialog: {
      type: Boolean,
      required: true,
      default: false
    },
    loaderMessage: {
      type: String,
      required: false,
      default: 'Por favor espere'
    }
  }
}
</script>
