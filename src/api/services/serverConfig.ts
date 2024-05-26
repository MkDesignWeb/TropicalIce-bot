import { Socket } from "socket.io"
import { Express } from "express"
const cors = require("cors")
const express = require("express")
export const app: Express = express()
export const server = require("http").createServer(app)
const bodyParser = require('body-parser');
export const io: Socket = require("socket.io")(server, {
    cors: {
        origin: "*",
        methods: ["POST", "GET"]
    }
})

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
