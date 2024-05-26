import { Message, Whatsapp } from "@wppconnect-team/wppconnect"

import { CallAttendant } from "../../FunctionsChats/CallAttendant"
import { IfCall } from "../../../Utils/IfUtils"
import { CreateOrder } from "../../FunctionsChats/Createorder"
import { NextStage } from "../../../Utils/StageUtils"
import { SelectCupMessage } from "../../SendMessage"

export const WriteQuantityMenu = (message: Message, client: Whatsapp) => {

    if(Number(message.body) <= 20 && Number(message.body) >= 1) {
        CreateOrder(message, client, Number(message.body))
        NextStage(message, 4)
    } else if(isNaN(Number(message.body))) {
        client.sendText(message.from, "Digite o numero da quantidade que você deseja 🤔")
        return
    } else {
        client.sendText(message.from, "Você pode pedir até 20 unidades 🤔")
    } 


    IfCall(message, "Atendente", () => {
        CallAttendant(message, client)
    })




}