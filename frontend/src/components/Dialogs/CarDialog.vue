<script setup lang="ts">


import {ref} from "vue";
import CarDialogForm from "@/components/CarOffer/CarDialogForm.vue";
import {defaultCarItem} from "@/utils/temporary-car-items";
import type {DialogActions} from "@/types/DialogActions";
import useCarsApi from "@/api/api.cars";
import Dialog from '@/components/Dialog.vue'
import type {CarItemExtended} from "@/types/CarItemExtended";
import useImagesApi from "@/api/api.images";
import type {CarItemModel} from "@/models/CarItemModel";

const carsApi = useCarsApi();
const imagesApi = useImagesApi();

const carModel = ref<CarItemModel>(defaultCarItem);
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

async function handleSubmit(data: CarItemExtended): Promise<void> {
  carModel.value = data.carItem;
  const newCar = await carsApi.createNewCar(carModel.value);

  if (data.importedImages.length) {
    const formData = new FormData();
    Array.from(data.importedImages).forEach(image => {
      formData.append('images', image.imgFile);
      formData.append('mainImg', JSON.stringify(image.mainImg));
    })

    await imagesApi.uploadImages(formData, newCar.carId);
  }

  closeDialog();
}

async function openDialog(carItem?: CarItemModel): Promise<void> {
  if (carItem) {
    carModel.value = carItem
    carModel.value.imgs = await imagesApi.fetchCarImages(21);
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
          @submit="handleSubmit"
      />
    </template>
  </Dialog>
</template>

<style scoped lang="scss">

</style>