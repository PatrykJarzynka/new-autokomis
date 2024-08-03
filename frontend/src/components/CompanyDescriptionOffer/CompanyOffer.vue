<script setup lang="ts">

import CompanyOfferCard from "@/components/CompanyDescriptionOffer/CompanyOfferCard.vue";
import {companyItems} from "@/utils/company-items";
</script>

<template>
  <div class="offer-container">
    <CompanyOfferCard
        v-for="item in companyItems"
        :item="item"
    />
  </div>
</template>

<style scoped lang="scss">
@import '../../utils/colors';

.offer-container {
  display: flex;
  flex-direction: column;
  row-gap: 50px;
  width: 100%;
  margin: 0;
}

</style>