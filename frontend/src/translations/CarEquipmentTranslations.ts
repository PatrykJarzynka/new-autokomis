import {AudioMultimediaTranslations} from "@/translations/AudioMultimediaTranslations";
import {SafetyTranslations} from "@/translations/SafetyTranslations";
import {ComfortTranslations} from "@/translations/ComfortTranslations";
import {ElectricTranslations} from "@/translations/ElectricTranslations";
import {PerformanceTranslations} from "@/translations/PerformanceTranslations";
import {DriveAssistanceTranslations} from "@/translations/DriveAssistanceTranslations";

export interface TranslationsData {
    audioMultimedia: typeof AudioMultimediaTranslations;
    safety: typeof SafetyTranslations,
    performance: typeof PerformanceTranslations,
    driveAssistance: typeof DriveAssistanceTranslations,
    comfort: typeof ComfortTranslations,
    electric:typeof ElectricTranslations,
}

export const carEquipmentTranslations: TranslationsData = {
    audioMultimedia: AudioMultimediaTranslations,
    safety: SafetyTranslations,
    performance: PerformanceTranslations,
    driveAssistance: DriveAssistanceTranslations,
    comfort: ComfortTranslations,
    electric: ElectricTranslations,
}