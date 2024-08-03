import axios from "axios";
import type {CarItem} from "@/types/CarItem";

const baseURL = 'http://localhost:3000'

function useCarsApi() {

    async function createNewCar(carItem: CarItem): Promise<void> {
        await axios.post(`${baseURL}/cars`, carItem)
    }

    async function getAllCars(): Promise<void> {
        await axios.get(`${baseURL}/cars`)
    }

    return {
        createNewCar,
        getAllCars
    }
}

export default useCarsApi