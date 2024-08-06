<script setup lang="ts">
import { VNumberInput } from 'vuetify/labs/VNumberInput'
import useStringConverter from "@/composables/useStringConverter";
import CarEquipment from "@/components/CarOffer/CarEquipment.vue";
import {ref} from "vue";
import type {VForm} from "vuetify/components";
import DragAndDrop from "@/components/CarOffer/DragAndDrop.vue";
import {bodyType, driveType, fuelType} from "@/types/CarEquipment";
import type {EquipmentCategoryItemUpdate} from "@/types/EquipmentUpdate";
import {isNumber, remove} from "lodash";
import type {CarItemExtended} from "@/types/CarItemExtended";
import type {CarItemModel} from "@/models/CarItemModel";
import type {ImageData, ImgDataBasic, ImgDataFileExtended} from "@/types/ImageData";

interface Props {
  carItem: CarItemModel;
}

interface Emits {
  (e: 'submit', data: CarItemExtended): void;
}

interface NewImage {
  imgId: string;
  imgFile: File;
  mainImg: boolean;
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const { upperCaseFirstLetter } = useStringConverter();

const form = ref<InstanceType<typeof VForm>>();
const dragDrop = ref<InstanceType<typeof DragAndDrop>>();
const carData = ref(props.carItem);
const carDataImages = ref<ImgDataBasic[]>(props.carItem.imgs.map(image => { return {imgPath: image.imgPath, imgId: image.imgId}}))
const importedImages = ref<NewImage[]>([]);

const rules = {
  required: (value:string | number) => !!value || 'To pole nie może pozostać puste',
};

async function handleSubmit(): Promise<void> {
  const isValid = await form.value?.validate();
  const convertedImages = selectMainImage(carDataImages.value);

  importedImages.value = importedImages.value.map(importedImage => {
    return {
      imgId: importedImage.imgId,
      imgFile: importedImage.imgFile,
      mainImg: !!convertedImages.find(image => image.imgId === importedImage.imgId)?.mainImg
    }
  })


  if(isValid?.valid) {

    emit('submit', {
      carItem: {
        ...carData.value,
        imgs: convertedImages.filter(image => !isNumber(image.imgId))
      },
      importedImages: importedImages.value,
    })
  }
}

function selectMainImage(images: ImgDataBasic[]): ImageData[] {
  return images.map((image, index) => {
    return {
      mainImg: index === 0,
      imgId: image.imgId,
      imgPath: image.imgPath
    }
  })

}

function handleUpdate(value: EquipmentCategoryItemUpdate) {
  Object.assign(carData.value.wyposazenie[value.equipmentKey], {[value.item.key]: value.item.value});
}

function handleDeleteImage(imgId: string): void {
  remove(carDataImages.value, (img) => img.imgId === imgId);
  remove(importedImages.value,(img) => img.imgId === imgId)
}

function handleUpdateImages(images: ImgDataFileExtended[]): void {
  images.forEach((image, imageIndex) => {
    const temporaryImageId = `new-file-${imageIndex}`

    carDataImages.value.push({
      imgPath: image.imgPath,
      imgId: temporaryImageId,
    })

    importedImages.value.push({
      imgId: temporaryImageId,
      imgFile: image.file,
      mainImg: false,
    })
  })
}

function handleSwapImages(indexOne: number, indexTwo: number): void {
  let temporaryVariable = carDataImages.value[indexOne];
  carDataImages.value[indexOne] = carDataImages.value[Number(indexTwo)];
  carDataImages.value[Number(indexTwo)] = temporaryVariable;
}


defineExpose({
  handleSubmit
})

</script>

<template>
  <v-container>
    <v-form ref="form">
      <v-label class="section-label">{{'Informacje podstawowe'}}</v-label>
      <v-divider class="pb-4"/>

      <v-container>
        <v-text-field
            :model-valuue="carData.title"
            class="pb-3"
            variant="outlined"
            label="Tytuł*"
            :rules="[rules.required]"
            @update:model-value="(value) => carData.title = value"
        />

        <div class="dialog-content--basic-info">

          <v-select
              :model-value="carData.nadwozie"
              variant="outlined"
              label="Typ nadwozia*"
              :items="bodyType"
              :rules="[rules.required]"
              @update:model-value="(value) => carData.nadwozie = value"
          />

          <v-select
              :model-value="carData.naped"
              variant="outlined"
              label="Napęd*"
              :items="driveType"
              :rules="[rules.required]"
              @update:model-value="(value) => carData.naped = value"
          >
            <template #item="{props,item}">
              <v-list-item
                  v-bind="props"
                  :title="upperCaseFirstLetter(item.title)"
              />
            </template>
          </v-select>

          <v-select
              :model-value="carData.paliwo"
              variant="outlined"
              label="Paliwo*"
              :items="fuelType"
              :rules="[rules.required]"
              @update:model-value="(value) => carData.paliwo = value"
          >
            <template #item="{props,item}">
              <v-list-item
                  v-bind="props"
                  :title="upperCaseFirstLetter(item.title)"
              />
            </template>
          </v-select>

          <v-number-input
              :model-value="carData.rocznik"
              variant="outlined"
              control-variant="split"
              label="Rok produkcji*"
              :rules="[rules.required]"
              @update:model-value="(value) => carData.rocznik = value"
          />

          <v-number-input
              :model-value="carData.przebieg"
              variant="outlined"
              control-variant="split"
              label="Przebieg [km]*"
              :rules="[rules.required]"
              @update:model-value="(value) => carData.przebieg = value"
          />

          <v-number-input
              :model-value="carData.moc"
              variant="outlined"
              control-variant="split"
              label="Moc silnika [KM]*"
              :rules="[rules.required]"
              @update:model-value="(value) => carData.moc = value"

          />

          <v-number-input
              :model-value="carData.pojemnosc"
              variant="outlined"
              control-variant="split"
              label="Pojemność silnika [cm³]*"
              :rules="[rules.required]"
              @update:model-value="(value) => carData.pojemnosc = value"
          />

          <v-number-input
              :model-value="carData.liczbaDrzwi"
              variant="outlined"
              control-variant="split"
              label="Liczba drzwi*"
              :rules="[rules.required]"
              @update:model-value="(value) => carData.liczbaDrzwi = value"
          />

          <v-number-input
              :model-value="carData.liczbaMiejsc"
              variant="outlined"
              control-variant="split"
              label="Liczba miejsc*"
              :rules="[rules.required]"
              @update:model-value="(value) => carData.liczbaMiejsc = value"
          />

          <v-number-input
              :model-value="carData.liczbaWlascicieli"
              variant="outlined"
              control-variant="split"
              label="Liczba właścicieli*"
              :rules="[rules.required]"
              @update:model-value="(value) => carData.liczbaWlascicieli = value"
          />

          <v-text-field
              :model-value="carData.kraj"
              variant="outlined"
              label="Kraj pochodzenia*"
              :rules="[rules.required]"
              @update:model-value="(value) => carData.kraj = value"
          />

          <v-text-field
              :model-value="carData.vin"
              variant="outlined"
              label="Numer VIN*"
              :rules="[rules.required]"
              @update:model-value="(value) => carData.vin = value"
          />

          <v-text-field
              :model-value="carData.rejestracja"
              variant="outlined"
              label="Numer rejestracyjny*"
              :rules="[rules.required]"
              @update:model-value="(value) => carData.rejestracja = value"
          />

          <v-number-input
              :model-value="carData.cena"
              variant="outlined"
              control-variant="split"
              label="Cena*"
              :rules="[rules.required]"
              @update:model-value="(value) => carData.cena = value"
          />
        </div>

      </v-container>

      <v-label class="section-label">{{'Wyposażenie'}}</v-label>
      <v-divider class="pb-4"/>

      <v-container>
        <CarEquipment
            :readonly="false"
            :equipment="carData.wyposazenie"
            @update-equipment="handleUpdate"
        />
      </v-container>

      <v-label class="section-label">{{'Zdjęcia i opis'}}</v-label>
      <v-divider class="pb-4"/>

      <v-container class="description-container">
          <DragAndDrop
              ref="dragDrop"
              :img-data="carDataImages"
              @delete-item="handleDeleteImage"
              @update-images="handleUpdateImages"
              @swap-images="handleSwapImages"
          />

          <v-textarea
              class="description-container"
              :style="{flex: 1}"
              :model-value="carData.description"
              auto-grow
              variant="outlined"
              hide-details
          />
      </v-container>
    </v-form>
  </v-container>
</template>

<style scoped lang="scss">
@import '../../utils/colors';

.section-label {
  color: $primaryColor;
  font-weight: 500;
  opacity: 1;
}

.dialog-content {
  &--basic-info {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px
  }

  &--basic-info > :last-child {
    grid-column: span 2;
  }
}

.description-container {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}

</style>