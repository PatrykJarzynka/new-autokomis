<script setup lang="ts">

import {temporaryCarItems} from "@/utils/temporary-car-items";
import {useRouter} from "vue-router";

const router = useRouter();

function handleClick(itemId: string): void {
  router.push({ path: `/oferta/${itemId}` });
}
</script>

<template>
    <v-container class="offer-container">

      <RouterView/>
      <div class="offer-items-container">
        <v-card
            v-for="car in temporaryCarItems"
            @click="handleClick(car.id)"
        >
            <v-img
                :src="car.imgs[0]"
                :height="400"
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

          <v-card-text class="price">4000PLN</v-card-text>

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
    flex: 1;
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