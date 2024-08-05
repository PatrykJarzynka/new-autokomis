export interface ImageData {
    imgPath: string;
    imgId: string | null;
    mainImg: boolean;
}

export type ImgDataBasic = Omit<ImageData, 'mainImg'>;

export interface ImgDataFileExtended extends ImageData {
    file: File;
}
