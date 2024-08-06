<script setup lang="ts">

import {useRouter} from "vue-router";
import {onMounted, ref} from "vue";
import useCarsApi from "@/api/api.cars";
import type {CarPreview} from "@/models/CarPreview";
import useStringConverter from "@/composables/useStringConverter";

const router = useRouter();
const { getAllCarsPreview } = useCarsApi();
const { createImagePath } = useStringConverter()

function handleClick(itemId: string): void {
  router.push({ path: `/oferta/${itemId}` });
}

const carItems = ref<CarPreview[]>();

onMounted(async () => {
  carItems.value = await getAllCarsPreview();
})
</script>

<template>
    <v-container class="offer-container">

      <RouterView/>
      <div class="offer-items-container">
        <v-card
            v-for="car in carItems"
            @click="handleClick(car.carId as string)"
        >
            <v-img
                :src="createImagePath(car.mainImg)"
                :height="350"
                :alt="`${car.title} zdjęcie`"
                cover
            />

          <v-card-title>{{car.title}}</v-card-title>

          <div class="card-info">
            <v-card-subtitle>{{car.rocznik}}</v-card-subtitle>
            <v-card-subtitle>{{car.przebieg + ' km'}}</v-card-subtitle>
            <v-card-subtitle>{{car.paliwo}}</v-card-subtitle>
            <v-card-subtitle>{{car.moc + 'KM'}}</v-card-subtitle>
            <v-card-subtitle>{{car.pojemnosc + ' cm3'}}</v-card-subtitle>
          </div>

          <v-card-text class="price">{{car.cena}}PLN</v-card-text>

        </v-card>
      </div>
    </v-container>
</template>

<style scoped lang="scss">
@import '../utils/colors.scss';

  .offer-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
  }

  .main-title {
    font-size: 40px;
    font-weight: 500;
    color: $primaryColor;
    height: fit-content;
  }

  .offer-items-container {
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;
  }

  .card-info {
    display: flex;

    .v-card-subtitle {
      font-size: 15px;
    }
  }

  .price {
    font-size: 22px;
    font-weight: 500;
    color: $accentColor;
  }
</style>