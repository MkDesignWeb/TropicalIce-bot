import { Message, Whatsapp } from "@wppconnect-team/wppconnect"

import { CallAttendant } from "../../FunctionsChats/CallAttendant"
import { IfCall, IfChange } from "../../../Utils/IfUtils"
import { SelectQuantityMenuChat } from "../../menus"
import { NextStage } from "../../../Utils/StageUtils"
import { CreateOrder } from "../../FunctionsChats/Createorder"
import { WriteQuantityMessage } from "../../SendMessage"


export const SelectQuantityMenu = (message: Message, client: Whatsapp) => {

    IfCall(message, "1", async () => {
        CreateOrder(message, client)
        NextStage(message, 4)
    })

    IfCall(message, "2", () => {
        WriteQuantityMessage(message, client)
        NextStage(message)
    })

    IfCall(message, "Atendente", () => {
        CallAttendant(message, client)
    })

    IfChange(message, SelectQuantityMenuChat, { SpeakAttendant: true }, () => {
        client.sendText(message.from, "Número inválido, tente novamente 🤔")
    })

}