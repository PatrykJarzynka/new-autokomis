export const carEquipmentSelectItems = {
    airConditioning: ['automatyczna', 'automatyczna, 2 strefowa', 'automatyczna, 3 strefowa', 'automatyczna 4+ strefowa', 'manualna' ] as const,
    tapicerka: ['alcantara', 'czesciowo skorzana', 'materialowa', 'skorzana'] as const,
    tempomat: ['tempomat', 'tempomat adaptacyjny ACC', 'tempomat przewidujacy PCC'] as const,
    reflektory: ['lampy bi-ksenonowe', 'lampy ksenonowe', 'lampy przednie w technologii LED', 'reflektory laserowe'] as const,
    opony: ['letnie', 'off-road', 'wielosezonowe', 'zimowe'] as const,
    felgi: ['aluminiowe', 'stalowe'] as const
}

type AirConditioningType = typeof carEquipmentSelectItems.airConditioning[number];
type UpholsteryType = typeof carEquipmentSelectItems.tapicerka[number];
type TempomatType = typeof carEquipmentSelectItems.tempomat[number];
type HeadlightsType = typeof carEquipmentSelectItems.reflektory[number];
type TireType = typeof carEquipmentSelectItems.opony[number];
type RimsType = typeof carEquipmentSelectItems.felgi[number];


export interface AudioMultimedia {
    appleCarPlay: boolean;
    bluetooth: boolean;
    zestawGlosnomowiacy: boolean;
    ladowanieBezprzewodowe: boolean;
    systemNaglosnienia: boolean;
    touchScreen: boolean;
    internet: boolean;
    androidAuto: boolean;
    radio: boolean;
    usb: boolean;
    nawigacjaSatelitarna: boolean;
    wyswietlaczHeadUp: boolean;
    kontrolaGlosem: boolean;
}

export interface Comfort {
    airConditioning: AirConditioningType | null;
    tapicerka: UpholsteryType | null;
    elektrycznyFotelKierowcy: boolean;
    elektrycznyFotelPasazera: boolean;
    pogrzewanyFotelKierowcy: boolean;
    pogrzewanyFotelPasazera: boolean;
    regulacjaPodparciaLedzwiowegoKierowca: boolean;
    regulacjaPodparciaLedzwiowegoPasazer: boolean;
    foteleWentylowanePrzod: boolean;
    foteleWentylowaneTyl: boolean;
    foteleMasazPrzod: boolean;
    foteleMasazTyl: boolean;
    sportoweFotelePrzod: boolean;
    ogrzewaneSiedzeniaTyl: boolean;
    podlokietnikiPrzod: boolean;
    podlokietnikiTyl: boolean;
    skorzanaKierownica: boolean;
    sportowaKierownica: boolean;
    sterowanieRadiemKierownica: boolean;
    kierownicaWielofunkcyjna: boolean;
    kierownicaOgrzewana: boolean;
    kierownicaBiegi: boolean;
    shifterSkorzany: boolean;
    cyfrowyKluczyk: boolean;
    keylessEntry: boolean;
    keylessGo: boolean;
    engineStartNoKeys: boolean;
    ogrzewaniePostojowe: boolean;
    czujnikDeszczu: boolean;
    kontrolaOgrzewania: boolean;
    pogrzewanaPrzedniaSzyba: boolean;
    wycieraczki: boolean;
    elektryczneSzybyPrzod: boolean;
    elektryczneSzybyTyl: boolean;
    przyciemnioneSzybyTyl: boolean;
    elektrycznyDach: boolean;
    hak: boolean;
    elektrycznyDachPilot: boolean;
}

export interface DriveAssistance {
    tempomat: TempomatType | null;
    reflektory: HeadlightsType | null;
    kontrolaOdleglosciParkowaniePrzod: boolean;
    kontrolaOdleglosciParkowanieTyl: boolean;
    parkAssistant: boolean;
    kameraPanoramiczna360: boolean;
    kameraParkowaniaTyl: boolean;
    elektryczneLusterkaUstawienie: boolean;
    elektryczneLusterkaSkladanie: boolean;
    podgrzewaneLusterka: boolean;
    kameraLusterka: boolean;
    czujnikiMartwegoPola: boolean;
    aystentZmianyPasa: boolean;
    laneAssist: boolean;
    kontrolaOdleglosciPojazdu: boolean;
    ogranicznikPredkosci: boolean;
    brakeAssist: boolean;
    asystentPokonywaniaZakretow: boolean;
    kontrolaTrakcji: boolean;
    kontrolaZjazduZeStoku: boolean;
    hillHolder: boolean;
    rozpoznawanieOgarniczeniaPredkosci: boolean;
    rozpoznawanieZnakowDrogowych: boolean;
    zapobieganieKolizjomSkrzyzowanie: boolean;
    autoKierowanie: boolean;
    asystentSwiatelDrogowych: boolean;
    lampyDoswietlajaceZakret: boolean;
    oswietlenieAdaptacyjne: boolean;
    czujnikZmierzchu: boolean;
    spryskiwaczeReflektorow: boolean;
    swiatlaDzienne: boolean;
    swiatlaDzienneLED: boolean;
    lampyPrzeciwmglowe: boolean;
    lampyPrzeciwmgloweLED: boolean;
    lampyTylneLED: boolean;
    startStop: boolean;
    elektrycznaKontrolaCisnieniaOpony: boolean;
    elektrycznyHamulecPostojowy: boolean;
    wspomaganieKierownicy: boolean;
    oswietlenieWnetrzaLED: boolean;
    asystentJazdyWKorku: boolean;
    regulowanyDyferencjalCentralny: boolean;
    blokadaMechanizmuRoznicowego: boolean
}

export interface Electric {
    quickCharge: boolean;
    kabelDoLadowania: boolean;
    systemOdzyskiwaniaEnergii: boolean;
}

export interface Performance {
    oponyRunFlat: boolean;
    zawieszenieRegulowane: boolean;
    zawieszenieHydropneumatyczne: boolean;
    zawieszenieKomfortowe: boolean;
    zawieszenieSportowe: boolean;
    zawieszeniePneumatyczne: boolean;
    hamulceKompozytCeramiczny: boolean;
    filtrCzastekStalych: boolean;
    opony: TireType | null;
    felgi: RimsType | null;
}

export interface Safety {
    abs: boolean;
    esp: boolean;
    wspomaganieHamowania: boolean;
    rozdzialSilyHamowania: boolean;
    hamowanieAwaryjneWMiescie: boolean;
    hamowaniaAwaryjnePiesi: boolean;
    asystentHamowaniaAwaryjnego: boolean;
    ostrzezenieOKolizji: boolean;
    ochronaSluchuKolizja: boolean;
    ochronaPrzedKolizjaTyl: boolean;
    ochronaPrzedKolizjaBok: boolean;
    ruchPoprzecznyTyl: boolean;
    emitacjaDzwiekuSilnika: boolean;
    zmeczenieKierowcy: boolean;
    rekomendowaniePrzerwPodczasJazdy: boolean;
    monitorowanieKondycjiKierowcy: boolean;
    asystentPasaRuchu: boolean;
    powiadomienieOWypadku: boolean;
    poduszkaPowietrznaKierowcy: boolean;
    poduszkaPowietrznaPasazer: boolean;
    poduszkaKolanaKierowca: boolean;
    poduszkaKolanaPasazer: boolean;
    kurtynyPowietrznePrzod: boolean;
    kurtynyPowietrzneTyl: boolean;
    poduszkaPowietrznCentralna: boolean;
    poduszkaPowietrznaCzolowaTyl: boolean;
    bocznePoduszkiPowietrznePrzod: boolean;
    bocznePoduszkiPowietrzneTyl: boolean;
    bocznaPoduszkaPowietrznaKierowcy: boolean;
    kurtynaPowietrznaTylPoprzeczna: boolean;
    poduszkaPowietrznaPasowBezpieczenstwa: boolean;
    isofix: boolean;
    dachowanie: boolean;
}

export interface CarEquipment {
    audioMultimedia: AudioMultimedia;
    comfort: Comfort;
    electric: Electric;
    driveAssistance: DriveAssistance;
    performance: Performance;
    safety: Safety
}

export type CarEquipmentKeys = keyof CarEquipment;
export type CarEquipmentValuesKeys =
    keyof CarEquipment["audioMultimedia"] |
    keyof CarEquipment["safety"] |
    keyof CarEquipment["comfort"] |
    keyof CarEquipment["electric"] |
    keyof CarEquipment["driveAssistance"] |
    keyof CarEquipment["performance"];

export type CarEquipmentValues =
    CarEquipment["audioMultimedia"] |
    CarEquipment["safety"] |
    CarEquipment["comfort"] |
    CarEquipment["electric"] |
    CarEquipment["driveAssistance"] |
    CarEquipment["performance"]
