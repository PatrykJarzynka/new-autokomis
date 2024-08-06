import type {CarItem} from "@/types/CarItem";
import {client} from "@/api/httpClient";
import type {CarItemModel} from "@/models/CarItemModel";
import type {CarPreview} from "@/models/CarPreview";

const ENDPOINT = '/cars'

function useCarsApi() {

    async function getCar(carId: number): Promise<CarItemModel> {
        try {
            const response = await client.get(`${ENDPOINT}/${carId}` )
            return response.data;
        }
        catch (error: any) {
            throw new Error(error)
        }
    }

    async function createNewCar(carItem: CarItem): Promise<CarItemModel> {
        try {
            const response = (await client.post(ENDPOINT, carItem))
            return response.data;
        }
        catch (error: any) {
            throw new Error(error)
        }
    }

    async function getAllCarsPreview(): Promise<CarPreview[]> {
        try {
            const response = await client.get(`${ENDPOINT}/preview`)
            return response.data
        }
        catch (error: any) {
            throw new Error(error);
        }
    }



    return {
        createNewCar,
        getAllCarsPreview,
        getCar
    }
}

export default useCarsApi