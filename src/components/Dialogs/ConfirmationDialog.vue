<script setup lang="ts">

import Dialog from "@/components/Dialog.vue";
import {ref} from "vue";

const dialog = ref<InstanceType<typeof Dialog>>()

function openDialog(): void {
  dialog.value?.openDialog()
}

function closeDialog(): void {
  dialog.value?.closeDialog();
}

defineExpose({
  openDialog,
  closeDialog
})

</script>

<template>
  <Dialog
      ref="dialog"
      :opacity="0"
  >
    <template #content>
      <v-card-text class="h-100">
        <v-card-text>
          {{'Czy na pewno chcesz usunąć ofertę?'}}
        </v-card-text>
      </v-card-text>

    </template>
  </Dialog>
</template>

<style scoped lang="scss">

</style>