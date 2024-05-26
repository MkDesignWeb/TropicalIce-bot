import axios, { AxiosInstance } from "axios";
import { io } from "socket.io-client";

export const socket = io('http://localhost:3001')


export class Service {
    protected api: AxiosInstance;
    protected static baseURL = "http://localhost:3001";

    constructor() {
        this.api = Service.getAPIClient();
    }

    private static getAPIClient = () => {
        const api = axios.create({
            baseURL: this.baseURL,
        });


        return api;
    };

}
