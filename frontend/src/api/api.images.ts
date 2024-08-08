import {client} from "@/api/httpClient";
import type {ImageData} from "@/types/ImageData";

const ENDPOINT = '/images'

function useImagesApi() {
    async function uploadImages(data: FormData, carId): Promise<void> {
        try {
            const response = await client.post(`${ENDPOINT}/upload/${carId}`,data)
            return response.data
        }
        catch (error: any) {
            throw new Error(error);
        }
    }

    async function fetchCarImages(carId: number): Promise<ImageData[]> {
        try {
            const response = await client.get(`${ENDPOINT}/${carId}`)
            return response.data
        }
        catch (error: any) {
            throw new Error(error);
        }
    }

    return {
        uploadImages,
        fetchCarImages
    }
}

export default useImagesApi