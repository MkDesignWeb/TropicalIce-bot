import { StatusFind } from "@wppconnect-team/wppconnect"
import { Socket } from "socket.io"
import { app } from "./serverConfig"
import { appElectron } from "../../app"

export const botStatus = (socket: Socket) => {
    let statusOn: "logged" | "desconnected" | "autocloseCalled"

    const statusUtil = (data: StatusFind) => {
            if(data === "inChat"){
                statusOn = "logged"
            }
            if(data === "desconnectedMobile"){
                statusOn = "desconnected"
            }
            if(data === "notLogged"){
                statusOn = "desconnected"
            }
            if(data === "autocloseCalled") {
                statusOn = "desconnected"
                appElectron.quit()
            }
            if(data === "browserClose") {
                statusOn = "desconnected"
            }
            if(data === "phoneNotConnected") {
                statusOn = "desconnected"
            }
            if(data === "qrReadError") {
                statusOn = "desconnected"
            }
            if(data === "qrReadFail") {
                statusOn = "desconnected"
            }
            if(data === "serverClose") {
                statusOn = "desconnected"
            }            
        }
    
    app.get("/statuson", (req, res) => {
        res.send(statusOn)
    })
    
    socket.on("statusFind", (data: StatusFind) => {
        statusUtil(data)
        socket.broadcast.emit("statusLive", statusOn)
    })
}

