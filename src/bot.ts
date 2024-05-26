import Wppconnect from "@wppconnect-team/wppconnect";
import { socket } from "./bot/Services/api";
import { start } from "./bot/main";

const wppconnect: typeof Wppconnect = require("@wppconnect-team/wppconnect")

export const wpp = () => {

  wppconnect.create({
    statusFind: (status) => {
      socket.emit("statusFind", status)
    },
    session: 'tropical-ice',
    catchQR: (base64Qr, asciiQR, attempt, urlCode) => {
      socket.emit("qrcode", urlCode)
    },
    logQR: false,
  }
  )
    .then(
      (client) => {
        start(client)
      })
    .catch((error) => console.log(error));

}