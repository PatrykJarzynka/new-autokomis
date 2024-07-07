<script setup lang="ts">

import CompanyOfferCard from "@/components/Offer/CompanyOfferCard.vue";
import {companyItems} from "@/utils/company-items";
</script>

<template>
  <v-row class="offer-container">
    <v-col v-for="item in companyItems">
      <CompanyOfferCard
          :item="item"
      />
    </v-col>
  </v-row>
</template>

<style scoped lang="scss">
@import '../../utils/colors';

.offer-container {
  width: 100%;
  margin: 0;
}

</style>