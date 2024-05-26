import { Message, Whatsapp } from "@wppconnect-team/wppconnect"

import { CallAttendant } from "../../FunctionsChats/CallAttendant"
import { IfCall, IfChange } from "../../../Utils/IfUtils"
import { MakeWish } from "../../FunctionsChats/MakeWish"
import { InitialMenuChat } from "../../menus"
import { ViewFreight } from "../../FunctionsChats/ViewFreight"

export const InitialMenu = (message: Message, client: Whatsapp) => {
    IfCall(message, "1", () => {
        MakeWish(message, client)
    })

    IfCall(message, "2", () => {
        CallAttendant(message, client)
    })

    IfCall(message, "3", () => {
        ViewFreight(message, client)
    })
    IfChange(message, InitialMenuChat, {}, () => {
        client.sendText(message.from, "Número inválido, tente novamente 🤔")
    })

}