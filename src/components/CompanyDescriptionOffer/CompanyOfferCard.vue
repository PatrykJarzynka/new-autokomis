<script setup lang="ts">
  import type {companyItems} from "@/utils/company-items";
  import companySVG from '@/assets/images/newSVG.svg'
  import {computed} from "vue";

  type Location = 'left' | 'right'

  interface Props {
    item: typeof companyItems[number];
  }

  defineProps<Props>();

</script>

<template>
  <v-card class="offer-card">
    <v-row
        :class="item.location === 'left' ? 'container-left' : 'container-right'"
        class="offer-row-container"
    >
      <v-col
          class="img-column"
          cols="8"
      >
        <img
            class="item-img"
            :src="'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'"
        />

      </v-col>

      <v-col
          cols="6"
          class="description-column"
      >
        <div class="description-container">
          <p>GEGEGEHEHEHEH</p>

          <div>
            <p>XDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD</p>
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
  border: 5px solid $primaryColor;
  border-radius: 30px;
  height: 550px;
}

.description-column {
  position: absolute;
  bottom: 0;
  height: 100%;

  background-color: $primaryColor;
  z-index: 2;
}

.img-column {
  height: 100%;
  padding: 0;
  position: absolute;
  bottom: 0;
  z-index: 1;
}

.item-img {
  height: 100%;
  width: 100%;
}

.description-container {
  position: absolute;
  padding: 20px;
  width: 75%;
}

.container-left {
  .img-column {
    right: 0;
  }

  .description-column {
    left: 0;
    clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);
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
    clip-path: polygon(100% 0%, 100% 49%, 100% 100%, 25% 100%, 0% 50%, 25% 0%);
  }

  .description-container {
    right: 0;
  }
}




</style>