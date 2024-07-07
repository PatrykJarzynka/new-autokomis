<script setup lang="ts">
  import type {companyItems} from "@/utils/company-items";
  import companySVG from '@/assets/images/newSVG.svg'

  interface Props {
    item: typeof companyItems[number]
  }

  defineProps<Props>()
</script>

<template>
  <v-card class="offer-card">
<!--    <v-img class="company-svg" :src="companySVG"/>-->

    <v-container class="offer-card--container">
      <v-row class="card-title-container">
        <v-col>
          <v-card-title class="card-title">
            {{item.itemTitle}}
          </v-card-title>
        </v-col>
      </v-row>

      <v-row>
        <v-col class="card-icon-column">
          <v-icon
              class="card-icon"
              :icon="item.itemIcon"
              :color="item.iconColor"
          />
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-card-text class="card-text">
            {{item.itemDescription}}
          </v-card-text>
        </v-col>
      </v-row>
    </v-container>

<!--    <v-img class="company-svg-2" :src="companySVG"/>-->
  </v-card>
</template>

<style scoped lang="scss">
@import '../../utils/colors';

.offer-card {
  display: flex;
  border: 5px solid $primaryColor;
  border-radius: 30px;
  flex: 1;

  &--container {
    display: grid;
    grid-template-rows: 1fr 1fr auto;
  }
}

.card-title {
  white-space: break-spaces;
  text-align: center;
}

.card-title-container {
  display: flex;
  align-items: center;
}

.card-icon {
  font-size: 100px;
}

.card-icon-column {
  display: flex;
  justify-content: center;
}

.card-text {
  font-size: 16px;
  text-align: justify;
}

//.company-svg {
//  width: 40%;
//  height: 100%;
//  position: absolute;
//  left: -40px;
//  top:-75px;
//  z-index: -1;
//}
//
//.company-svg-2 {
//  width: 40%;
//  height: 100%;
//  position: absolute;
//  right: -40px;
//  bottom:-75px;
//  z-index: -1;
//}

</style>