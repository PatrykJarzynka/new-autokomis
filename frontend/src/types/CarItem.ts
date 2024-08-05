import {bodyType, type CarEquipment, driveType, fuelType} from "./CarEquipment";
import type {ImageData} from "@/types/ImageData";

type FuelType = typeof fuelType[number];
type BodyType = typeof bodyType[number];
type DriveType = typeof driveType[number];

export interface CarItem {
    title: string | null;
    rocznik: number | null;
    przebieg: number | null;
    paliwo: FuelType | null;
    moc: number | null;
    pojemnosc: number | null;
    imgs: ImageData[];
    nadwozie: BodyType | null;
    naped: DriveType | null;
    liczbaDrzwi: number | null;
    liczbaMiejsc: number | null;
    kraj: string | null;
    liczbaWlascicieli: number | null;
    cena: number | null;
    vin: string | null;
    rejestracja: string | null;
    wyposazenie: CarEquipment;
    description: string | null;
}