<script setup lang="ts">

import Dialog from "@/components/Dialog.vue";
import {ref} from "vue";
import type {DialogActions} from "@/types/DialogActions";

const dialog = ref<InstanceType<typeof Dialog>>();

const dialogActions = ref<DialogActions>({
  confirm: {
    label: "Ok",
    action: () => {},
  },
  close: {
    label: "Zamknij",
    action: () => {},
  }
})

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
      :title="'Potwierdź akcje'"
      :actions="dialogActions"
  >
    <template #content>
      <v-card-text class="h-100">
        <v-card-text class="dialog-content">
          {{'Czy na pewno chcesz usunąć ofertę?'}}
        </v-card-text>
      </v-card-text>

    </template>
  </Dialog>
</template>

<style scoped lang="scss">

.dialog-content {
  font-size: 18px;
}

</style>