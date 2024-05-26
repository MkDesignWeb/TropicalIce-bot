import { Message, Whatsapp } from "@wppconnect-team/wppconnect"

import { CallAttendant } from "../../FunctionsChats/CallAttendant"
import { IfCall, IfChange } from "../../../Utils/IfUtils"
import { GlassesMenuChat } from "../../menus"
import { StorageOrderService } from "../../../Services/storageOrderService"
import { NextStage } from "../../../Utils/StageUtils"

export const SelectCupMenu = (message: Message, client: Whatsapp) => {

    GlassesMenuChat.map((cup, index) => {
        IfCall(message, String(index + 1), () => {
            StorageOrderService.selectCup(message.from, cup.name).then(res => {
                client.sendText(message.from, `*Selecionado: ${cup.name}*`)
            })
            NextStage(message)
        })
    })
    
    IfCall(message, "Atendente", () => {
        CallAttendant(message, client)
    })

    IfChange(message, GlassesMenuChat, { SpeakAttendant: true }, () => {
        client.sendText(message.from, "Número inválido, tente novamente 🤔")
    })

}