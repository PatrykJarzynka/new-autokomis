import axios, {type AxiosError, type AxiosInstance, type AxiosResponse} from "axios";
import getEnv from "@/utils/env";

const client = createHttpClient();

function createHttpClient(): AxiosInstance {
    const axiosInstance = axios.create({
        baseURL: getEnv('VITE_APP_URL'),
        timeout: 20000,
    })

    axiosInstance.interceptors.response.use(
        responseInterceptor,
        errorInterceptor
    )

    return axiosInstance
}

function responseInterceptor(response: AxiosResponse): AxiosResponse {
    return response;
}

function errorInterceptor (error: AxiosError): Promise<never> {
    if (!error.response) {
        console.warn('Network/Server error');
        return Promise.reject(error)
    }

    console.error(error.response.status, error.message);

    return Promise.reject(error);
}

export {
    client
}