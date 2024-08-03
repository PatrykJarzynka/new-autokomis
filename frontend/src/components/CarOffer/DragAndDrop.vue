<script setup lang="ts">
import {computed, ref, watch} from "vue";
import HoverImg from "@/components/CarOffer/HoverImg.vue";
import {remove} from "lodash";
import { toast } from 'vue3-toastify';

  interface FileInterface {
    name: string;
    url: string;
  }

  interface Props {
    imgUrls?: string[] | null;
  }

  const props = defineProps<Props>();

  const allowedFileTypes = ['image/jpeg','image/gif','image/png','image/jpg'];
  const localFiles = ref<FileInterface[]>([]);
  const isDragging = ref<boolean>(false);

watch(() => props.imgUrls, (newImgs) => {
  if (newImgs) {
    insertCarImages(newImgs)
  }
}, {immediate: true})

  const numberOfGridRows = computed(() => {
    return Math.ceil(localFiles.value.length / 4);
  })

  function handleDragEnter(event: DragEvent): void {
    isDragging.value = true;
  }

  function handleDragLeave(event: DragEvent): void {
    isDragging.value = false;
  }

  function handleDragOver(event: DragEvent): void {
    event.preventDefault();
  }

  function handleDrop(event: DragEvent): void {
    const fileList = event.dataTransfer?.files;
    if (fileList) {
      previewFiles(fileList)
    }
    event.preventDefault();
  }

  function previewFiles(files: FileList): void {
    for (const file of files) {
      if (!allowedFileTypes.includes(file.type)) {
        handleWrongTypeOfFile();
      } else {
        localFiles.value.push({
          name: file.name,
          url: URL.createObjectURL(file)
        })
      }
    }
  }

  function handleUploadClick(): void {
    const input = document.getElementById('file-uploader');

    if(input) {
      input.click();
    }
  }

  function handleDelete(index: number): void {
    remove(localFiles.value, (file, fileIndex) => fileIndex === index);
  }

  function insertCarImages(imgUrls: string[]): void {
    imgUrls.forEach(imgUrl => {
      localFiles.value.push({
        name: 'testName',
        url: imgUrl,
      })
    })
  }

  function handleWrongTypeOfFile(): void {
    isDragging.value = false;
    toast('Niewłaściwy typ pliku!',
        {
          type: 'error',
          position: 'bottom-center',
          transition: "slide",
          theme: 'colored'
        });
  }

  function handleDragStartLocalImg(event: DragEvent, imgIndex: number): void {
    if (event.dataTransfer) {
      event.dataTransfer.dropEffect = 'move';
      event.dataTransfer.effectAllowed = 'move';
      event.dataTransfer.setData('imgIndex', imgIndex.toString())
    }
  }

  function handleDropLocalImg(event: DragEvent, imgIndex: number): void {
    if (event.dataTransfer) {
      const dragImgIndex = Number(event.dataTransfer.getData('imgIndex'))
      swapItems(localFiles.value, imgIndex, dragImgIndex)
    }
  }

  function swapItems(array: any[], itemIndexOne: number, itemIndexTwo: number): void {
    let temporaryVariable = array[itemIndexOne];
    array[itemIndexOne] = array[Number(itemIndexTwo)];
    array[Number(itemIndexTwo)] = temporaryVariable;
  }

  function handleImportImg(event: Event): void {
    if (event.target) {
      Array.from((event.target as HTMLInputElement).files || []).forEach(file => {
        localFiles.value.push({
          name: file.name,
          url: URL.createObjectURL(file)
        })
      })
    }
  }
</script>

<template>
    <div
        class="drag-drop-container"
        @dragenter="handleDragEnter"
        @dragleave="handleDragLeave"
        @drop="handleDrop"
        @dragover="handleDragOver"
    >
      <div
          v-if="!localFiles.length"
          class="no-uploaded-images-container"
      >
        <div
            v-if="!isDragging"
            class="no-drag"
        >
          <v-btn
              class="upload-imgs-btn"
              @click="handleUploadClick"
          >
            {{'Dodaj zdjęcia'}}
          </v-btn>

          <p>lub upuść tutaj</p>
        </div>

        <div v-else>
          <p>Upuść pliki tutaj</p>
        </div>

        <input
            id="file-uploader"
            type="file"
            multiple
            :style="{display: 'none'}"
            @change="handleImportImg"
        />
      </div>


      <div
          v-else
          class="preview-container"
      >
        <HoverImg
            v-for="(file, fileIndex) in localFiles"
            :img-index="fileIndex"
            :src="file.url"
            @delete="handleDelete"
            @dragstart="(event) => handleDragStartLocalImg(event, fileIndex)"
            @drop="(event) => handleDropLocalImg(event, fileIndex)"
        />

      </div>
    </div>
</template>

<style scoped lang="scss">
@import '../../utils/colors';

$numberOfGridRows: v-bind(numberOfGridRows);

.drag-drop-container{
  display: flex;
  justify-content: center;
  border: 3px dashed grey;
  min-height: 320px;
}

.input-file {
  padding-bottom: 20px;
}

.preview-container {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat($numberOfGridRows, 150px);
  gap: 10px;
  padding: 10px;
  max-height: 650px;
  overflow-y: auto;
  grid-auto-rows: 150px;
}

.no-uploaded-images-container {
  display: flex;
  align-items: center;

  .no-drag {
    display: flex;
    align-items: center;
    column-gap: 20px;
  }
}

.upload-imgs-btn {
  background-color: $secondaryColor;
  color: white;
}

.progress-bar-container {
  background-color: white;
}

</style>