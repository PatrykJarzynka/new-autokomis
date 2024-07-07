<script setup lang="ts">
import CompanyMainTile from "@/components/Home/CompanyMainTile.vue";
import CompanyOffer from "@/components/Offer/CompanyOffer.vue";
import CompanyContactCard from "@/components/Home/CompanyContactCard.vue";

</script>

<template>
  <CompanyMainTile/>
  <div class="content-container">
    <CompanyOffer/>
    <CompanyContactCard/>
  </div>

</template>


<style lang="scss" scoped>
@import '../utils/colors.scss';

  .content-container {
    display: flex;
    flex-direction: column;
    row-gap: 80px;
    padding-inline: 150px;
    padding-block: 80px;
  }
</style>