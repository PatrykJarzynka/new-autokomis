import {AudioMultimediaTranslations} from "@/translations/AudioMultimediaTranslations";
import {SafetyTranslations} from "@/translations/SafetyTranslations";
import {ComfortTranslations} from "@/translations/ComfortTranslations";
import {ElectricTranslations} from "@/translations/ElectricTranslations";
import {PerformanceTranslations} from "@/translations/PerformanceTranslations";
import {DriveAssistanceTranslations} from "@/translations/DriveAssistanceTranslations";
import type {CarEquipmentKeys} from "@/types/CarEquipment";

type Translations = typeof AudioMultimediaTranslations | typeof SafetyTranslations | typeof ComfortTranslations | typeof ElectricTranslations | typeof PerformanceTranslations | typeof DriveAssistanceTranslations

export const carEquipmentTranslations: Record<CarEquipmentKeys, Translations> = {
    audioMultimedia: AudioMultimediaTranslations,
    safety: SafetyTranslations,
    performance: PerformanceTranslations,
    driveAssistance: DriveAssistanceTranslations,
    comfort: ComfortTranslations,
    electric: ElectricTranslations

}