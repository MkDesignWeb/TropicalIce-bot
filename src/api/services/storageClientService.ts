import { Socket } from "socket.io"
import { app } from "./serverConfig"
import { ClientStorage, dbService } from "../storage"

export const storageClientServices = (socket: Socket) => {
    
const createStorageClient = () => {
    app.post("/client", async (req, res) => {
            const client = ClientStorage.find((client) => client.from === req.body.from)
            if(!client){
                ClientStorage.push({ stage: 1, author: req.body.author, chatBot: true, from: req.body.from })
                console.log(ClientStorage)
                socket.broadcast.emit("app/client/create")
                res.send(ClientStorage.find((client) => client.from === req.body.from))
            } else {
                res.send("Cliente já existente: " + client )
            }
    })
}

const getStorageClient = () => {
    app.get("/client", async (req, res) => {
        res.send(ClientStorage)
    })

    app.get("/client/:from", async (req, res) => {
        const client = ClientStorage.find((client) => client.from === req.params.from)
        if(client) {
            res.send(client)
        } else {
            res.status(404).send("Cliente não encontrado")
        }
    })
}

const chatBotStorageClient = () => {
    app.post("/client/chatbot", (req, res) => {
        const client = ClientStorage.find(data => data.from === req.body.from)

        if(client) {
            client.chatBot = req.body.value
            socket.broadcast.emit("app/client/chatBot")
        } else {
            res.status(404).send("Cliente não encontrado")
        }
    })
}

const stageChangeStorageClient = () => {
    app.post("/client/stage", (req, res) => {
        const client = ClientStorage.find(data => data.from === req.body.from)
        if(client) {
            client.stage = req.body.stage
        } else {
            res.status(404).send("Cliente não encontrado")
        }
    })
}

    stageChangeStorageClient()
    createStorageClient()
    getStorageClient()
    chatBotStorageClient()
}