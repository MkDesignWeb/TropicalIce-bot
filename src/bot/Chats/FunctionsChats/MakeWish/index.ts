import { Message, Whatsapp } from "@wppconnect-team/wppconnect"
import { NextStage } from "../../../Utils/StageUtils"
import { QuantityMessage } from "../../SendMessage"

export const MakeWish = async (message: Message, client: Whatsapp) => {
    QuantityMessage(message, client)
    NextStage(message)
}