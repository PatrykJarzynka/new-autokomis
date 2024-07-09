<script setup lang="ts">
  import {isBoolean} from "lodash";

  interface Props {
    value: boolean | number | string;
    title: string;
  }

  defineProps<Props>();

</script>

<template>
    <v-icon :icon="'mdi-check'"/>

    <p v-if="isBoolean(value)">
      {{title}}
    </p>

    <p v-else>
      {{`${title} ${value}`}}
    </p>

</template>

<style scoped lang="scss">

</style>