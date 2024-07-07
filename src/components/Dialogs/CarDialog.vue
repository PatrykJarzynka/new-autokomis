<script setup lang="ts">

import Dialog from "@/components/Dialog.vue";
import {onMounted, ref} from "vue";
import CarDialogForm from "@/components/CarOffer/CarDialogForm.vue";
import type {CarItem} from "@/types/CarItem";
import {defaultCarItem} from "@/utils/temporary-car-items";




const dialog = ref<InstanceType<typeof Dialog>>();
const carModel = ref<CarItem>(defaultCarItem);

function openDialog(carItem?: CarItem): void {
  if (carItem) {
    carModel.value = carItem
  }

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
      title="Nowe ogłoszenie"
  >
    <template #content>
        <v-card-text class="h-100">
          <CarDialogForm
              :car-model="carModel"
          />
        </v-card-text>

    </template>
  </Dialog>
</template>

<style scoped lang="scss">

</style>