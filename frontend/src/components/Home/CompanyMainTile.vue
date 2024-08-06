<script setup lang="ts">
import logo from '@/assets/images/logo.svg'
import {companyItems} from "@/utils/company-items";
</script>

<template>
  <v-sheet
      width="100%"
      height="600"
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

          <div class="company-description--container">
            <p class="company-description">
              Szukasz niezawodnego auta, które spełni Twoje oczekiwania? Trafiłeś w idealne miejsce!
              W naszym autokomisie oferujemy szeroki wybór używanych samochodów różnych marek i modeli.
              Każdy pojazd w naszej ofercie przeszedł szczegółową kontrolę techniczną, aby zapewnić Ci maksymalne bezpieczeństwo i komfort jazdy.
            </p>

            <div class="button-container">
              <v-btn class="offer-button">SPRAWDŹ OFERTĘ</v-btn>
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

.company-description {
  color: $primaryColor;
  font-size: 22px;
  font-weight: 600;

  &--container {
    display: flex;
    flex-direction: column;
    padding: 25px;
    width: 80%;
    flex: 2;
  }
}

.company-logo {
  flex: 1;
  width: 90%;
  animation: 0.7s ease-out 0s 1 slideInFromLeft;
}

.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;

  .offer-button {
    font-size: 20px;
    height: 50px;
    background-color: $accentColor;
    color: $defaultColor;
  }
}

</style>