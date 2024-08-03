import type {Translation} from "@/types/Translation";
import type {Electric} from "@/types/CarEquipment";

export const ElectricTranslations: Translation<Electric>  = {
    title: 'Samochody elektryczne',
    values: {
        quickCharge: 'Funkcja szybkiego ładowania',
        kabelDoLadowania: 'Kabel do ładowania',
        systemOdzyskiwaniaEnergii: 'System odzyskiwania energii',
    }
}