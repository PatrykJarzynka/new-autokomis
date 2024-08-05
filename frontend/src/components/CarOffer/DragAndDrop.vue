<script setup lang="ts">
import {computed, ref} from "vue";
import HoverImg from "@/components/CarOffer/HoverImg.vue";
import { toast } from 'vue3-toastify'
import type {ImageData, ImgDataBasic, ImgDataFileExtended} from "@/types/ImageData";

  interface Props {
    imgData: ImgDataBasic[]
  }

  interface Emit {
    (e: 'delete-item', imgId: string);
    (e: 'update-images', images: ImgDataFileExtended[]): void;
    (e: 'swap-images', indexOne: number, indexTwo: number): void;
  }


  const props = defineProps<Props>();
  const emit = defineEmits<Emit>()
  const allowedFileTypes = ['image/jpeg','image/gif','image/png','image/jpg'];
  const isDragging = ref<boolean>(false);

  const numberOfGridRows = computed(() => {
    console.log(props.imgData)
    return Math.ceil(props.imgData.length / 4);
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
      convertFilesToImageDataAndNotify(fileList)
    }
    event.preventDefault();
  }

  function handleUploadClick(): void {
    const input = document.getElementById('file-uploader');

    if(input) {
      input.click();
    }
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
      event.dataTransfer.setData('imgIndex', imgIndex.toString());
    }
  }

  function handleDropLocalImg(event: DragEvent, imgIndex: number): void {
    event.stopPropagation();

    if (event.dataTransfer) {
      const dragImgIndex = Number(event.dataTransfer.getData('imgIndex'))
      emit('swap-images', imgIndex, dragImgIndex)
    }
  }

  function handleImportImg(event: Event): void {
    if (event.target) {
      convertFilesToImageDataAndNotify(Array.from((event.target as HTMLInputElement).files ?? []))
    }
  }

  function convertFilesToImageDataAndNotify(files: FileList | File[]): void {
    const previewFiles: ImgDataFileExtended[] = [];

    for (const file of files) {
      const fileConvertedToImageData = handleImportedFile(file);

      if (fileConvertedToImageData) {
        previewFiles.push(fileConvertedToImageData);
      }
    }

    emit('update-images', previewFiles)
  }

  function handleImportedFile(file: File): ImgDataFileExtended | undefined {
    if (!allowedFileTypes.includes(file.type)) {
      handleWrongTypeOfFile();
      return;
    } else {
      return convertFileToImageData(file);
    }
  }

  function convertFileToImageData(file: File): ImgDataFileExtended {
    return {
      imgPath: URL.createObjectURL(file),
      imgId: null,
      mainImg: false,
      file: file,
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
          v-if="!imgData.length"
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
            v-for="(img, imgIndex) in imgData"
            :img-id="img.imgId as string"
            :src="img.imgPath"
            :main-img="imgIndex === 0"
            @delete="(imgId: string) => emit('delete-item', imgId)"
            @dragstart="(event) => handleDragStartLocalImg(event, imgIndex)"
            @drop="(event) => handleDropLocalImg(event, imgIndex)"
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