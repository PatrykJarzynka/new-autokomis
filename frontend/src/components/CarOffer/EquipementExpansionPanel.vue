<script setup lang="ts">
  import {computed} from "vue";
  import CheckmarkDisplayData from "@/components/CheckmarkDisplayData.vue";
  import type {TranslationsData} from "@/translations/CarEquipmentTranslations";
  import {isBoolean, isNil, omit} from "lodash";
  import {
    type AudioMultimedia,
    type CarEquipment, type CarEquipmentNoId,
    carEquipmentSelectItems,
    type Comfort, type DriveAssistance,
    type Electric, type Performance, type Safety
  } from "@/types/CarEquipment";
  import type {EquipmentItemUpdate} from "@/types/EquipmentUpdate";

  interface Props {
    readonly: boolean;
    translationsData: TranslationsData[keyof CarEquipment];
    values: CarEquipmentNoId[keyof CarEquipmentNoId];
  }

  interface Emits {
    (e:'item-update', data: EquipmentItemUpdate): void
  }

  const props = defineProps<Props>();
  const emit = defineEmits<Emits>()

  const numberOfGridColumns = computed(() => {
    const length = Object.keys(props.values).length;
    return Math.ceil(length / 10);
  })

  function handleUpdate(value: boolean | null, itemKey: keyof (CarEquipment[keyof CarEquipment])): void {
    if (!isNil(value)) {
      emit('item-update',{key: itemKey, value: value})
    }
  }
</script>

<template>
  <v-expansion-panel v-if="Object.keys(values).length">
    <v-expansion-panel-title class="expansion-panel-title">{{translationsData.title}}</v-expansion-panel-title>
    <v-expansion-panel-text class="expansion-panel-content--container">
      <div
          v-for="(itemValue, itemKey) in omit(values, 'id') "
      >
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
              @update:model-value="(value) => handleUpdate(value, itemKey)"
          />

          <v-select
              v-else
              :model-value="itemValue"
              variant="outlined"
              :style="{flex: 1}"
              :label="translationsData.values[itemKey]"
              :items="carEquipmentSelectItems[itemKey]"
              @update:model-value="(value) => handleUpdate(value, itemKey)"
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