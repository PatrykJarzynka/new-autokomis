<script setup lang="ts">
import EquipementExpansionPanel from "@/components/CarOffer/EquipementExpansionPanel.vue";
import {carEquipmentTranslations} from "@/translations/CarEquipmentTranslations";
import {onMounted, ref, watch} from "vue";
import type {CarEquipment, CarEquipmentKeys, CarEquipmentValues, CarEquipmentValuesKeys} from "@/types/CarEquipment";

interface Props {
  equipment: CarEquipment;
  readonly :boolean
}

const props = defineProps<Props>();

const equipmentState = ref<CarEquipment>({} as CarEquipment);

function setTruthyValues(): void {
  for (const equipmentCategory in props.equipment) {
    const typedEquipmentItem = equipmentCategory as CarEquipmentKeys;

    Object.keys(props.equipment[typedEquipmentItem]).forEach(equipmentItemKey => {
      const typedEquipmentItemKey = equipmentItemKey as CarEquipmentValuesKeys;
      const equipmentValue = (props.equipment as any)[typedEquipmentItem as any][typedEquipmentItemKey as any];
      if(equipmentValue) {
        (equipmentState.value as any)[typedEquipmentItem as any] = {
          ...equipmentState.value[typedEquipmentItem],
          [typedEquipmentItemKey]: equipmentValue
        };
      }
    })
  }
}

onMounted(() => {
  if (props.readonly) {
    setTruthyValues();
  } else {
    equipmentState.value = props.equipment;
  }
})
</script>

<template>
    <v-expansion-panels
        class="expansion-panels-container"
        variant="accordion"
    >
      <EquipementExpansionPanel
          v-for="(equipmentValues, equipmentCategory) in equipmentState"
          :readonly="readonly"
          :title="carEquipmentTranslations[equipmentCategory].title"
          :translations="carEquipmentTranslations[equipmentCategory].values"
          :values="equipmentValues"
      />
    </v-expansion-panels>
</template>

<style scoped lang="scss">
@import '../../utils/colors';

.expansion-panels-container {
  border: 2px solid $primaryColor;
  border-radius: 5px;
}

</style>