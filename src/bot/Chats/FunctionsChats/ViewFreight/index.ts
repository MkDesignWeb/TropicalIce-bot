import { Message, Whatsapp } from "@wppconnect-team/wppconnect"
import { stages } from "../../stages"
import { StorageClientService } from "../../../Services/storageClientService"
import { FREIGHT, WELCOME } from "../../textConstants"

export const ViewFreight = async (message: Message, client: Whatsapp) => {
    client.sendText(message.from, FREIGHT)
    setTimeout(() => {
        client.sendText(message.from, WELCOME)
    }, 1000);
}