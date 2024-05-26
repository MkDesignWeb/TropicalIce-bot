import { Message, Whatsapp } from "@wppconnect-team/wppconnect"
import { NextStage } from "../../../Utils/StageUtils"
import { QuantityMessage, SelectCupMessage } from "../../SendMessage"
import { StorageOrderService } from "../../../Services/storageOrderService"

export const CreateOrder = async (message: Message, client: Whatsapp, quantity?: number) => {
    StorageOrderService.create({ from: message.from, quantity: quantity ? quantity : 1 })
    SelectCupMessage(message, client)
}