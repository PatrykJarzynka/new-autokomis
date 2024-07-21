<script setup lang="ts">
import { VNumberInput } from 'vuetify/labs/VNumberInput'
import {bodyType, type CarItem, driveType, fuelType} from "@/types/CarItem";
import useStringConverter from "@/composables/useStringConverter";
import CarEquipment from "@/components/CarOffer/CarEquipment.vue";
import {ref} from "vue";
import type {VForm} from "vuetify/components";
import DragAndDrop from "@/components/CarOffer/DragAndDrop.vue";

interface Props {
  carItem: CarItem;
}

interface Emits {
  (e: 'update:carItem', data: CarItem): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const { upperCaseFirstLetter } = useStringConverter();

const form = ref<InstanceType<typeof VForm>>();
const carData = ref<CarItem>(props.carItem);
const rules = {
  required: (value:string | number) => !!value || 'To pole nie może pozostać puste',
};

async function handleSubmit(): Promise<void> {
  const isValid = await form.value?.validate();

  if(isValid?.valid) {
    emit('update:carItem', carData.value)
  }
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
              :model-value="carData.liczbaWlacicieli"
              variant="outlined"
              control-variant="split"
              label="Liczba właścicieli*"
              :rules="[rules.required]"
              @update:model-value="(value) => carData.liczbaWlacicieli = value"
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
        </div>

      </v-container>

      <v-label class="section-label">{{'Wyposażenie'}}</v-label>
      <v-divider class="pb-4"/>

      <v-container>
        <CarEquipment
            :readonly="false"
            :equipment="carData.equipment"
        />
      </v-container>

      <v-label class="section-label">{{'Zdjęcia i opis'}}</v-label>
      <v-divider class="pb-4"/>

      <v-container class="description-container">
          <DragAndDrop
              :img-urls="carData.imgs"
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
}

.description-container {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}

</style>