import type {CarItem} from "@/types/CarItem";

export interface CarItemModel extends CarItem {
    carId: number | null;
}