import type {CarEquipmentValuesKeys} from "@/types/CarEquipment";

export interface Translation {
    title: string;
    values: Partial<Record<CarEquipmentValuesKeys, string >>
}
