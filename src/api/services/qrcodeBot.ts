import { Socket } from "socket.io"
import { app } from "./serverConfig"

export const qrcodeBot = (socket: Socket) => {
    let qrcodeStorage: string

    app.get("/qrcode", (req, res) => {
        res.send(qrcodeStorage)
    })

    socket.on("qrcode", (qrcodeUrl: string)  => {
        qrcodeStorage = qrcodeUrl
        socket.broadcast.emit("qrcodeLive", qrcodeUrl)
    })
}

 

