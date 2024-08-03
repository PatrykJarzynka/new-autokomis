<script setup lang="ts">
import {HEADER_HEIGHT} from "@/utils/constants";
import CarDialog from "@/components/Dialogs/CarDialog.vue";
import {ref} from "vue";

interface HeaderItems {
  title: string,
  path: string,
}

const headerItems: HeaderItems[] = [
  {
    title: 'STRONA GŁÓWNA',
    path: '/'
  },
  {
    title: 'OFERTA',
    path: '/oferta'
  },
  {
    title: 'INFORMACJE',
    path: '/informacje'
  },
]

const carDialog = ref<InstanceType<typeof CarDialog>>()

function handleNewOfferClick(): void {
  carDialog.value?.openDialog();
}

</script>

<template>
  <v-app-bar
      class="position-fixed"
      :height="HEADER_HEIGHT"
  >
    <div class="header-container">
      <v-row justify="center" align="center" class="ma-0 h-100">
        <div
            v-for="item in headerItems"
            class="h-100"
        >
          <v-btn
              flat
              class="header-item h-100"
              :to="item.path"
          >
            <p>
              {{item.title}}
            </p>
          </v-btn>
        </div>

        <v-btn
            class="new-offer-btn"
            @click="handleNewOfferClick"
        >
          <v-icon :icon="'mdi-plus'"/>
          <p>{{'Nowe ogłoszenie'}}</p>
        </v-btn>
      </v-row>
    </div>
  </v-app-bar>

  <template>
    <CarDialog
        ref="carDialog"
    />
  </template>
</template>

<style lang="scss" scoped>
@import '../utils/colors.scss';

  .header-container {
    width: 100%;
    height: 100%;
    border-bottom: 0.125rem solid $primaryColor;
  }

  .header-item {
    p {
      font-weight: 700;
      color: $primaryColor;
    }
  }

  .logo-img {
    width: 450px;
    position: absolute;
    height: 100%;
    left: 0;
  }

  .new-offer-btn {
    position: absolute;
    right: 20px;
    background-color: $primaryColor;
    color: $defaultColor;
  }

</style>