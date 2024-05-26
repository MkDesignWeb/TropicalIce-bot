import { Socket } from "socket.io"
import { StartAppTray } from "./app"
import { io, server } from "./api/services/serverConfig"
import { wpp } from "./bot"
import { botStatus } from "./api/services/botStatus"
import { qrcodeBot } from "./api/services/qrcodeBot"
import { botChat } from "./api/services/botChat"
import { storageClientServices } from "./api/services/storageClientService"
import { storageOrderServices } from "./api/services/storageOrderService"

io.on("connection", async (socket: Socket) => {
    console.log(socket.id)

    // Status de conexão do BOT
    botStatus(socket)

    // Eviar QRCODE de conexão do BOT
    qrcodeBot(socket)

    //Serviços do armazenamento dos clientes
    storageClientServices(socket)

        //Serviços do armazenamento dos pedidos
    storageOrderServices(socket)

    // Service status do CHAT BOT
    botChat()

})

server.listen(3001, () => {
    StartAppTray()
    wpp()
    console.log("Server iniciado")
})




