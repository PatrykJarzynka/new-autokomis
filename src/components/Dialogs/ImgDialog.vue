<script setup lang="ts">

import Dialog from "@/components/Dialog.vue";
import {ref} from "vue";

interface Props {
  carImgSrcs: string[]
}

defineProps<Props>();

const dialog = ref<InstanceType<typeof Dialog>>();
const selectedImgIndex = defineModel();

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
      :fullscreen="true"
      :opacity="1"
      :hide-actions="true"
  >
    <template #content>
      <v-btn
          class="close-dialog-button"
          :icon="'mdi-close'"
          @click="closeDialog"
      />

      <v-carousel
          v-model="selectedImgIndex"
          hide-delimiters
          height="100%"
      >
        <v-carousel-item
            v-for="imgSrc in carImgSrcs"
            :key="imgSrc"
            :src="imgSrc"
        />
      </v-carousel>
    </template>
  </Dialog>
</template>

<style scoped lang="scss">

.close-dialog-button {
  position: absolute;
  right: 1.25rem;
  top: 1.25rem;
  z-index: 2;
}

</style>