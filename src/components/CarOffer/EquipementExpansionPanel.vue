<script setup lang="ts">
  import {computed} from "vue";
  import {
    type CarEquipment,
    carEquipmentSelectItems,
  } from "@/types/CarEquipment";
  import CheckmarkDisplayData from "@/components/CheckmarkDisplayData.vue";
  import type {TranslationsData} from "@/translations/CarEquipmentTranslations";
  import {isBoolean} from "lodash";

  interface Props {
    readonly: boolean;
    translationsData: TranslationsData[keyof CarEquipment];
    values: CarEquipment[keyof CarEquipment];
  }

  const props = defineProps<Props>();

  const numberOfGridColumns = computed(() => {
    const length = Object.keys(props.values).length;
    return Math.ceil(length / 10);
  })

</script>

<template>
  <v-expansion-panel v-if="Object.keys(values).length">
    <v-expansion-panel-title class="expansion-panel-title">{{translationsData.title}}</v-expansion-panel-title>
    <v-expansion-panel-text class="expansion-panel-content--container">
      <div v-for="(itemValue, itemKey) in values">
        <div
            v-if="readonly"
            class="expansion-panel-content"
        >
          <CheckmarkDisplayData
              :title="translationsData.values[itemKey]"
              :value="itemValue"
          />
        </div>

        <div v-else>

          <v-checkbox
              v-if="isBoolean(itemValue)"
              :label="translationsData.values[itemKey]"
              :model-value="itemValue"
              hide-details
          />

          <v-select
              v-else
              variant="outlined"
              :style="{flex: 1}"
              :label="translationsData.values[itemKey]"
              :items="carEquipmentSelectItems[itemKey]"
              :model-value="itemValue"
          />
        </div>
      </div>

    </v-expansion-panel-text>
  </v-expansion-panel>
</template>

<style scoped lang="scss">
@import '../../utils/colors';

$numberOfGridColumns: v-bind(numberOfGridColumns);

.expansion-panel-content {
  display: flex;
  column-gap: 10px;

  &--container {
    :deep(.v-expansion-panel-text__wrapper) {
      display: grid;
      grid-template-columns: repeat($numberOfGridColumns, 1fr);
      column-gap: 10px;
    }
  }
}

.expansion-panel-title {
  font-weight: 600;
  color: $primaryColor;
}

</style>