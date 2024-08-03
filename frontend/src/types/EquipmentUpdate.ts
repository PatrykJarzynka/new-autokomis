import type {CarEquipment} from "@/types/CarEquipment";

export interface EquipmentItemUpdate {
    key: keyof (CarEquipment[keyof CarEquipment]);
    value: boolean;
}

export interface EquipmentCategoryItemUpdate {
    equipmentKey: keyof CarEquipment;
    item: EquipmentItemUpdate;
}