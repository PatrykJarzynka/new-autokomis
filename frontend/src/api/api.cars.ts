import type {CarItem} from "@/types/CarItem";
import {client} from "@/api/httpClient";
import type {CarItemModel} from "@/models/CarItemModel";

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

    async function getAllCars(): Promise<CarItem[]> {
        try {
            const response = await client.get(ENDPOINT)
            return response.data
        }
        catch (error: any) {
            throw new Error(error);
        }
    }



    return {
        createNewCar,
        getAllCars,
        getCar
    }
}

export default useCarsApi