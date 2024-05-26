import { StatusFind } from "@wppconnect-team/wppconnect"

export const statusUtil = (data: StatusFind) => {
    switch(data) {
        case "isLogged":
            return "logged"
        case "qrReadSuccess":
            return "logged"
        case "inChat":
            return "logged"
        case "desconnectedMobile":
            return "desconnected"
        case "notLogged":
            return "desconnected"
        default: return "desconnected"
    }
}