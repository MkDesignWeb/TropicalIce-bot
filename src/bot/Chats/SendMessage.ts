import { Message, Whatsapp } from "@wppconnect-team/wppconnect";
import { WELCOME, FREIGHT, QUANTITY_ORDER, WRITE_QUANTITY_ORDER, CUPS_LIST } from "./textConstants";
import { SendMenuText } from "../Utils/SendMenuUtils";


export const QuantityMessage = (message: Message, client: Whatsapp) => {
    client.sendText(message.from, SendMenuText({ message: QUANTITY_ORDER, SpeakAttendant: true }))
}

export const WriteQuantityMessage = (message: Message, client: Whatsapp) => {
    client.sendText(message.from, SendMenuText({ message: WRITE_QUANTITY_ORDER, SpeakAttendant: true }))
}

export const SelectCupMessage = (message: Message, client: Whatsapp) => {
    client.sendText(message.from, SendMenuText({ message: CUPS_LIST, SpeakAttendant: true }))
}