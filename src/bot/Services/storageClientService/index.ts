import { Message } from "@wppconnect-team/wppconnect"
import { Service } from "../api"
import { CreateClientRequest, GetClientResponse } from "./storageClient"
import { IClient } from "../../../types/client"

class _StorageClientService extends Service {
    get = async (id: string) => this.api.get<GetClientResponse>(`/client/${id}`)
    list = async () => this.api.get<IClient>("/client")
    create = async (clientData: CreateClientRequest) => (await this.api.post<IClient>("/client", clientData))
    clientValidate = async (message: Message) => {
        try {
            return await this.get(message.from)
        } catch (e) {
            if (message.body.toLowerCase() === "teste") {
               return await this.create({ author: message.author, from: message.from })
            }
        }
    }
    chatbot = async (from: string, value: boolean) => this.api.post("/client/chatbot", { from, value })
    stageChange = async (from: string, stage: number) => this.api.post("/client/stage", { from, stage })
}

export const StorageClientService = new _StorageClientService();