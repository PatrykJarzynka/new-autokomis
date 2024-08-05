import type {CarItemModel} from "@/models/CarItemModel";

export interface CarItemExtended {
    carItem: CarItemModel;
    importedImages: {
        imgId: string;
        imgFile: File;
        mainImg: boolean;
    }[]
}