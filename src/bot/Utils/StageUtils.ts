import { Message } from "@wppconnect-team/wppconnect"
import { stages } from "../Chats/stages"
import { StorageClientService } from "../Services/storageClientService"


export const NextStage = async (message: Message, stage?: number) => {
    if(!stage) {
        const client = await StorageClientService.get(message.from)
        await StorageClientService.stageChange(message.from, client.data.stage + 1)
    } else {
        await StorageClientService.stageChange(message.from, stage)
    }
}

export const BackStage = async (message: Message) => {

}
