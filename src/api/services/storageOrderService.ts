import { Socket } from "socket.io"
import { app } from "./serverConfig"
import { OrderStorage } from "../storage"

export const storageOrderServices = (socket: Socket) => {
    
const createStorageOrder = () => {
    app.post("/order", (req, res) => {
        OrderStorage.push({ from: req.body.from, open: true, quantity: req.body.quantity })
        console.log(OrderStorage)
        res.send(OrderStorage.find(order => order.from === req.body.from))
    })
}

const selectCupOrder = () => {
    app.post("/order/cup", (req, res) => {
        const order = OrderStorage.find((order) => order.from === req.body.from)
        if(order) {
            if(order.open === true) {
                order.cup = req.body.cup
                socket.broadcast.emit("/app/order")
            }
            console.log(order)
            res.send(order)
        } else {
            res.status(404).send("Cliente não encontrado")
        }
    })
}

    createStorageOrder()
    selectCupOrder()
}