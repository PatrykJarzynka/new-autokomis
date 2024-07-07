<script setup lang="ts">
import {computed, ref, watch} from "vue";
import HoverImg from "@/components/CarOffer/HoverImg.vue";
import { v4 as uuidv4 } from 'uuid';
import {remove} from "lodash";

  interface FileInterface {
    id: string;
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
    gege(newImgs)
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
        return
      } else {
        localFiles.value.push({
          id: uuidv4(),
          name: file.name,
          url: URL.createObjectURL(file)
        })
      }
    }
  }

  function handleUploadClick(): void {
    let input = document.createElement('input');
    input.type = 'file';
    input.click();
  }

  function handleDelete(id: string): void {
    remove(localFiles.value, (file) => file.id === id);
  }

  function gege(imgUrls: string[]): void {
    imgUrls.forEach(imgUrl => {
      localFiles.value.push({
        id: uuidv4(),
        name: 'testName',
        url: imgUrl,
      })
    })
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
      </div>


      <div
          v-else
          class="preview-container"
      >
        <HoverImg
            :file-id="localFiles[0].id"
            :src="localFiles[0].url"
            :main-img="true"
            @delete="handleDelete"
        />

        <HoverImg
            v-for="file in localFiles.slice(1,localFiles.length)"
            :file-id="file.id"
            :src="file.url"
            @delete="handleDelete"
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

</style>