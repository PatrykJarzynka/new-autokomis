import type {CarItemModel} from "@/models/CarItemModel";

export interface CarPreview extends Pick<CarItemModel, "title" | 'rocznik' | 'przebieg' | 'paliwo' | 'moc' | 'pojemnosc' | 'cena' | 'carId'> {
    mainImg: string;
}
