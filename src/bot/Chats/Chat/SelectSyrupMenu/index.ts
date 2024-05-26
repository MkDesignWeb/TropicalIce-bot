import { Message, Whatsapp } from "@wppconnect-team/wppconnect"

import { CallAttendant } from "../../FunctionsChats/CallAttendant"
import { IfCall, IfChange } from "../../../Utils/IfUtils"
import { SyrupMenuChat } from "../../menus"


export const SelectSyrupMenu = (message: Message, client: Whatsapp) => {

    SyrupMenuChat.map((syrup, index) => {
        IfCall(message, String(index + 1), () => {
            
        })
    })
    
    IfCall(message, "Atendente", () => {
        CallAttendant(message, client)
    })

    IfChange(message, SyrupMenuChat, { SpeakAttendant: true }, () => {
        client.sendText(message.from, "Número inválido, tente novamente 🤔")
    })

}