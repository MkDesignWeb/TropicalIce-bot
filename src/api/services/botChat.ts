import { app } from "./serverConfig"

export const botChat = () => {

    let botStatus: boolean

    app.get("/bot/status", (req, res) => {
        res.send(botStatus ? "on" : "off")
    })

    app.get("/bot/start", (req, res) => {
        botStatus = true
        res.send("BOT INICIADO")
    })

    app.get("/bot/stop", (req, res) => {
        botStatus = false
        res.send("BOT PARADO")
    })

}
