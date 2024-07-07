import type {CarEquipment} from "@/types/CarEquipment";

export const driveType = ['przód', 'tył', '4x4'] as const;
export const fuelType = ['benzyna','diesel','hybryda'] as const;
export const bodyType = ['Sedan','SUV','Minivan','Kompakt','Kombi','Kabriolet','Coupe','Hatchback'] as const;


type FuelType = typeof fuelType[number];
type BodyType = typeof bodyType[number];
type DriveType = typeof driveType[number];

export interface CarItem {
    id: string;
    title: string | null;
    rocznik: number | null;
    przebieg: number | null;
    paliwo: FuelType | null;
    moc: number | null;
    pojemnosc: number | null;
    imgs: string[];
    nadwozie: BodyType | null;
    naped: DriveType | null;
    liczbaDrzwi: number | null;
    liczbaMiejsc: number | null;
    kraj: string | null;
    liczbaWlacicieli: number | null;
    cena: number | null;
    vin: number | null;
    rejestracja: string | null;
    equipment: CarEquipment;
    description: string | null;

}