import { Message, Whatsapp } from "@wppconnect-team/wppconnect"
import { stages } from "../../stages"
import { StorageClientService } from "../../../Services/storageClientService"

export const CallAttendant = async (message: Message, client: Whatsapp) => {
    client.sendText(message.from, "Aguarde até um de nossos atendentes te responder!")
    await StorageClientService.chatbot(message.from, false)
}