<script setup lang="ts">

import useRouteHandler from "@/composables/routeHandler";
import {computed, onMounted, ref} from "vue";
import type {CarItem} from "@/types/CarItem";
import {temporaryCarItems} from "@/utils/temporary-car-items";
import CarOfferBasicData from "@/components/CarOffer/CarOfferBasicData.vue";
import CarEquipment from "@/components/CarOffer/CarEquipment.vue";
import ImgDialog from "@/components/Dialogs/ImgDialog.vue";
import CarDialog from "@/components/Dialogs/CarDialog.vue";
import ConfirmationDialog from "@/components/Dialogs/ConfirmationDialog.vue";

const { getRouteParam } = useRouteHandler();
const carItem = ref<CarItem>();
const selectedItemIndex = ref<number>(0);
const imgDialog = ref<InstanceType<typeof ImgDialog>>();
const carDialog = ref<InstanceType<typeof CarDialog>>();
const confirmationDialog = ref<InstanceType<typeof ConfirmationDialog>>()

onMounted(() => {
  const itemId = getRouteParam("id")
  carItem.value = temporaryCarItems.find(carItem => carItem.id === itemId );
})

const imgPreviewTranslateNumber = computed((): string => {
  const columnWidth = document.getElementById('img-preview-0')?.clientWidth;
  const numberOfVisibleColumns = 6;

  if (columnWidth) {
    if (selectedItemIndex.value > 5 ) {
      const difference = Math.abs((numberOfVisibleColumns - selectedItemIndex.value)) + 1 ;
      return -(columnWidth * difference) + 'px';
    }
  }

  return '0px';
})

function handleUpdate(index: number): void {
  selectedItemIndex.value = index;
}

function handleImgClick(index: number): void {
  selectedItemIndex.value = index;
}

function handleSelectedImgClick(): void {
  imgDialog.value?.openDialog();
}

function handleEditOffer(): void {
  carDialog.value?.openDialog(carItem.value);
}

function handleDeleteOffer(): void {
  confirmationDialog.value?.openDialog();
}



</script>

<template>
  <v-container class="container">
    <v-row class="action-buttons-container">
      <v-btn
          class="action-button"
          :to="'/oferta'"
      >
        {{'POWRÓT DO OFERTY'}}
      </v-btn>

      <div class="offer-buttons-container">
        <v-btn
            class="action-button"
            @click="handleEditOffer"
        >
          {{'EDYTUJ'}}
        </v-btn>

        <v-btn
            class="action-button"
            @click="handleDeleteOffer"
        >
          {{'USUŃ'}}
        </v-btn>
      </div>
    </v-row>
    <v-row
        v-if="carItem"
        class="container--row">
        <v-col
            cols="7"
            class="car-photo-column"
        >
          <v-row class="flex-0-0 pt-5 pb-5">
            <v-carousel
                v-model="selectedItemIndex"
                hide-delimiters
                @update:modelValue="handleUpdate"
            >
              <v-carousel-item
                  class="cursor-pointer"
                  v-for="img in carItem.imgs"
                  :key="img"
                  :src="img"
                  @click="handleSelectedImgClick"
              />
            </v-carousel>
          </v-row>

          <v-row class="img-preview-row">
            <v-col
                v-for="(img, imgIndex) in carItem.imgs"
                :id="'img-preview-' + imgIndex"
                cols="2"
                class="img-preview-column"
                @click="handleImgClick(imgIndex)"
            >
              <v-img
                  :class="selectedItemIndex !== imgIndex ? 'no-selected' : ''"
                  :src="img"
              />
            </v-col>
          </v-row>

          <template>
            <ImgDialog
                ref="imgDialog"
                v-model="selectedItemIndex"
                :car-img-srcs="carItem.imgs"
            />
          </template>
        </v-col>


      <v-col
          cols="5"
          class="car-data-column"
      >
        <CarOfferBasicData
          :item="carItem"
        />
      </v-col>
    </v-row>

    <v-row>
      <p class="section-label">{{'Wyposażenie'}}</p>
      <v-divider class="pb-2"/>
      <v-container>
        <CarEquipment
            v-if="carItem?.equipment"
            :readonly="true"
            :equipment="carItem.equipment"
        />
      </v-container>

    </v-row>

    <v-row>
      <p class="section-label">{{'Opis'}}</p>
      <v-divider class="pb-2"/>

      <v-container>
        <div class="description-container elevation-2">
          <p>{{carItem?.description}}</p>
        </div>
      </v-container>

    </v-row>
  </v-container>

  <template >
    <CarDialog
        ref="carDialog"
    />

    <ConfirmationDialog
        ref="confirmationDialog"
    />
  </template>
</template>


<style scoped lang="scss">
@import '../../utils/colors';
$translationNumber: v-bind(imgPreviewTranslateNumber);


.action-buttons-container {
  justify-content: space-between;
  padding-bottom: 20px;

  .offer-buttons-container {
    display: flex;
    column-gap: 20px;
  }

  .action-button {
    background-color: $primaryColor;
    color: $defaultColor;
  }
}


.container {
  padding-top: 40px;
  padding-bottom: 80px;

  &--row {
    height: 100%;
  }
}

.car-photo-column {
  display: flex;
  flex-direction: column;
}

.no-selected::after {
  content: '';
  width: 100%;
  background-color: white;
  opacity: 0.5;
}

.car-data-column {
  background-color: white;
}

.img-preview-row {
  align-items: center;
  flex-wrap: nowrap;
  overflow: hidden;
  margin: 0;
}

.img-preview-column {
  transition: transform 0.5s;
  transform: translate($translationNumber, 0px);
  cursor: pointer;
}

.section-label {
  font-size: 1.438rem;
  color: $secondaryColor;
}

.description-container {
  background-color: white;
  padding: 20px;
  border: 2px solid $primaryColor;
  border-radius: 5px;
}

</style>