<script setup lang="ts">
  import type {CarItem} from "@/types/CarItem";

  interface Props {
    item: CarItem;
  }

  defineProps<Props>();
</script>

<template>
  <v-container class="h-100 d-flex flex-column ">
    <div class="info-container">
      <p class="car-title text-truncate">
        {{item.title}}
      </p>

      <div>
        <ul class="car-data-list-container">
          <li class="list-item">
            <span>Rok produkcji: </span>
            <span>{{item.rocznik}}</span>
          </li>

          <li class="list-item">
            <span>Typ nadwozia: </span>
            <span>{{item.nadwozie}}</span>
          </li>

          <li class="list-item">
            <span>Napęd: </span>
            <span>{{item.naped}}</span>
          </li>

          <li class="list-item">
            <span>Przebieg: </span>
            <span>{{item.przebieg}}</span>
          </li>

          <li class="list-item">
            <span>Paliwo: </span>
            <span>{{item.paliwo}}</span>
          </li>

          <li class="list-item">
            <span>Moc silnika: </span>
            <span>{{item.moc}}</span>
          </li>

          <li class="list-item">
            <span>Pojemność silnika: </span>
            <span>{{item.pojemnosc}}</span>
          </li>

          <li class="list-item">
            <span>Liczba drzwi: </span>
            <span>{{item.liczbaDrzwi}}</span>
          </li>

          <li class="list-item">
            <span>Liczba miejsc: </span>
            <span>{{item.liczbaMiejsc}}</span>
          </li>

          <li class="list-item">
            <span>Kraj pochodzenia: </span>
            <span>{{item.kraj}}</span>
          </li>

          <li class="list-item">
            <span>Liczba właścicieli: </span>
            <span>{{item.liczbaWlacicieli}}</span>
          </li>

          <li class="list-item">
            <span>VIN: </span>
            <span>{{item.vin}}</span>
          </li>

          <li class="list-item">
            <span>Numer rejestracyjny: </span>
            <span>{{item.rejestracja}}</span>
          </li>
        </ul>
      </div>

      <p class="car-price">
        <span class="car-price--label">
          Cena:
        </span>
        4000PLN
      </p>
    </div>

    <div class="contact-container">
      <p>{{'Zadzwoń'}}</p>

      <div>
        <v-icon
            :icon="'mdi-phone'"
        />
        <span> {{'+48 601 335 026'}}</span>
      </div>
    </div>
  </v-container>
</template>

<style scoped lang="scss">
@import '../../utils/colors';

.info-container {
  display: flex;
  flex-direction: column;
  row-gap: 1.25rem;
  margin-bottom: 1.25rem;
}

  .car-title {
    font-size: 24px;
    font-weight: 600;
    color: $primaryColor;
  }

  .list-item {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding-inline: 10px;

    span {
      font-size: 17px;
      color: $primaryColor;
      font-weight: 500;
    }
  }

  .list-item:nth-child(even) {
    background-color: rgba($secondaryColor, 0.5)
  }

  .car-data-list-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    row-gap: 5px;
  }

  .car-price {
    font-size: 33px;
    font-weight: 600;
    color: $accentColor;

    &--label {
      color: $primaryColor
    }
  }

  .contact-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    font-size: 23px;
    background-color: rgba($secondaryColor, 0.5);
    border-radius: 20px;

    p {
      font-weight: 600;
    }

    span {
      font-weight: 600;
    }

  }
</style>