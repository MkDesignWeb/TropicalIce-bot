import { IClient, IOrder } from "../../types/client"

type ClientStorageProps = IClient[]
type OrderStorageProps = IOrder[]

export const ClientStorage: ClientStorageProps = []

export const OrderStorage: OrderStorageProps = []

import { JsonDB, Config } from 'node-json-db';

export class _dbService {
    protected db: JsonDB;

    constructor() {
        this.db = _dbService.getdbClient();
    }

    private static getdbClient = () => {
        const db = new JsonDB(new Config("local-db", true, false, '/'));


        return db;
    };


    createClient = async (clientData: IClient) => this.db.push("/client[]", clientData)
    getClient = async (id: string) => this.db.find("/client", (data) => data.from === id)
    getAllClient = async () => this.db.getData("/client")
   
}

export const dbService = new _dbService();