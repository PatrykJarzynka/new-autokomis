<script setup lang="ts">
import logo from '@/assets/images/logo.svg'
import {companyItems} from "@/utils/company-items";
</script>

<template>
  <v-sheet
      width="100%"
      height="700"
      color="white"
      class="company-tile--container"
  >
    <v-row
        class="company-tile--content">
      <v-col
          cols="8"
          class="company-tile--content-outer-container"
      >
        <div class="company-tile--content-inner-container">
          <v-img class="company-logo" :src="logo"/>

          <div class="company-items--container">

            <div
              v-for="item in companyItems"
              class="company-item"
            >
              <p class="item-text">{{item.itemTitle}}</p>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<style scoped lang="scss">
@import '../../utils/colors';

@keyframes slideInFromLeft {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}

.company-tile {

  &--container {
    background-size: cover !important;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("@/assets/images/testCar.jpg") no-repeat;
  }

  &--content {
    height: 100%;
    margin: 0;

    &-outer-container {
      clip-path: polygon(0 0, 100% 0, 65% 100%, 0 100%);
      background-color: rgba(21, 57, 98, 0.8);
      height: 100%;
      padding: 25px;
    }

    &-inner-container {
      width: 98%;
      height: 100%;
      background-color: rgba(255, 255, 255, 0.7);
      display: flex;
      flex-direction: column;
      clip-path: polygon(0 0, 100% 0, 65% 100%, 0 100%);
    }
  }
}

.company-items {
  &--container {
    display: flex;
    flex-direction: column;
    row-gap: 30px;
    flex: 2;
  }
}

.company-item {
  display: flex;
  align-items: center;
  clip-path: polygon(0 0, 85% 0, 100% 100%, 0% 100%);
  background-color: $primaryColor;
  width: 55%;
  height: 80px;
  padding-left: 20px;
}

.company-logo {
  flex: 1;
  width: 90%;
  animation: 0.7s ease-out 0s 1 slideInFromLeft;
}

.item-text {
  color: $defaultColor;
  font-size: 25px;
}


</style>