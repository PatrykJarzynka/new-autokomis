
import {defaultCarEquipment} from "./temporary-car-equipment";
import type {CarItemModel} from "@/models/CarItemModel";

export const defaultCarItem: CarItemModel = {
    carId: null,
    title: null,
    description: null,
    imgs: [],
    moc: null,
    paliwo: null,
    rocznik: null,
    vin: null,
    pojemnosc: null,
    przebieg: null,
    rejestracja: null,
    kraj: null,
    liczbaWlascicieli: null,
    liczbaMiejsc: null,
    naped: null,
    liczbaDrzwi: null,
    cena: null,
    nadwozie: null,
    wyposazenie: defaultCarEquipment
}