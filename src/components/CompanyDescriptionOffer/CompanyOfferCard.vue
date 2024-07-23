<script setup lang="ts">
  import type {companyItems} from "@/utils/company-items";

  interface Props {
    item: typeof companyItems[number];
  }

  defineProps<Props>();

</script>

<template>
  <v-card class="offer-card elevation-10">
    <v-row
        :class="item.location === 'left' ? 'container-left' : 'container-right'"
        class="offer-row-container"
    >
      <v-col
          class="img-column"
      >
        <img
            class="item-img"
            :src="item.imgPath"
        />

      </v-col>

      <v-col
          cols="4"
          class="description-column"
      >
        <div class="description-container">
          <p class="description-label">{{item.itemTitle}}</p>

          <div class="description-content--container">
            <p>{{item.itemDescription}}</p>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<style scoped lang="scss">
@import '../../utils/colors';

.offer-card {
  display: flex;
  border-radius: 60px;
  height: 550px;
}

.description-column {
  position: absolute;
  bottom: 0;
  height: 100%;

  background-color: $primaryColor;
  z-index: 2;
  border-radius: 60px;
}

.img-column {
  height: 100%;
  padding: 0;
  position: absolute;
  bottom: 0;
  z-index: 1;
  max-width: 70%;
  flex: 0 0 70%;
}

.item-img {
  height: 100%;
  width: 100%;
}

.description-container {
  position: absolute;
  padding: 20px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 20px;
  color: $defaultColor;

  .description-label {
    padding-top: 20px;
    font-size: 30px;

  }
}

.description-content {
  &--container {
    display: flex;
    flex: 1;
    align-items: center;
  }
}

.container-left {
  .img-column {
    right: 0;
  }

  .description-column {
    left: 0;

  }

  .description-container {
    left: 0;
  }
}

.container-right {
  .img-column {
    left: 0;
  }

  .description-column {
    right: 0;
  }

  .description-container {
    right: 0;
  }
}




</style>