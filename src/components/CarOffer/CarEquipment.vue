<script setup lang="ts">
import EquipementExpansionPanel from "@/components/CarOffer/EquipementExpansionPanel.vue";
import {carEquipmentTranslations} from "@/translations/CarEquipmentTranslations";
import {onMounted, ref} from "vue";
import type {CarEquipment} from "@/types/CarEquipment";
import {cloneDeep} from "lodash";

interface Props {
  equipment: CarEquipment;
  readonly :boolean
}

const props = defineProps<Props>();

const equipmentState = ref<CarEquipment | null>(null);

function removeFalsyValues(equipment: CarEquipment): CarEquipment {
  const equipmentCopy = cloneDeep(equipment);

  let equipmentCategory: keyof CarEquipment;
  for (equipmentCategory in equipmentCopy) {

    Object.keys(equipmentCopy[equipmentCategory]).forEach((equipmentItemKey: string) => {
        const typedEquipmentItemKey = equipmentItemKey as keyof typeof equipmentCopy[typeof equipmentCategory];

        if (!equipmentCopy[equipmentCategory][typedEquipmentItemKey]) {
          delete equipmentCopy[equipmentCategory][typedEquipmentItemKey]
        }
    })
  }

  return equipmentCopy;
}

onMounted(() => {
  if (props.readonly) {
    equipmentState.value = removeFalsyValues(props.equipment);
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
          :translations-data="carEquipmentTranslations[equipmentCategory]"
          :values="equipmentValues"
          @item-update="(value) => console.log(value)"
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