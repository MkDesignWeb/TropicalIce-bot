import { Message } from "@wppconnect-team/wppconnect";
import { MenuProps } from "../Chats/menus";

type IfChangeProps = {
    SpeakAttendant?: boolean
    back?: boolean
    finish?: boolean
}

export const IfCall = (message: Message, text: string, callBack: () => void) => {
    if(message.body.toLowerCase() === text.toLowerCase()) {
        return callBack()
    }
}

export const IfChange = (message: Message, menu: MenuProps | string[], { SpeakAttendant, back, finish }: IfChangeProps, callBack: () => void) => {
    var validNumber = false
    menu.map((menuIten, index) => {
        if(message.body == String(index + 1)){
            validNumber = true
        }
    })
    if(SpeakAttendant) {
        if(message.body.toLowerCase() === "atendente") {
            validNumber = true
        }
    }
    if(finish) {
        if(message.body.toLowerCase() === "fim") {
            validNumber = true
        }
    }
    if(!validNumber){
        return callBack()
    }
}