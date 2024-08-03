<script setup lang="ts">


import {ref} from "vue";
import CarDialogForm from "@/components/CarOffer/CarDialogForm.vue";
import {defaultCarItem} from "@/utils/temporary-car-items";
import type {DialogActions} from "@/types/DialogActions";
import useCarsApi from "@/api/api.cars";
import type {CarItem} from "@/types/CarItem";
import Dialog from '@/components/Dialog.vue'

const carsApi = useCarsApi();

const carModel = ref<CarItem>(defaultCarItem);
const dialog = ref<InstanceType<typeof Dialog>>();
const carForm = ref<InstanceType<typeof CarDialogForm>>();
const dialogActions = ref<DialogActions>({
  confirm: {
    label: "Zapisz",
    action: () => {
      carForm.value?.handleSubmit();
    },
  },
  close: {
    label: "Zamknij",
    action: () => {},
  }
})

function handleUpdate(newCarItem: CarItem): void {
  carModel.value = newCarItem;

  carsApi.createNewCar(newCarItem)

  closeDialog();
}

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
      title="Nowe ogłoszenie"
      :actions="dialogActions"
  >
    <template #content>
      <CarDialogForm
          ref="carForm"
          :carItem="carModel"
          @update:carItem="handleUpdate"
      />
    </template>
  </Dialog>
</template>

<style scoped lang="scss">

</style>