import { Message } from "@wppconnect-team/wppconnect"
import { Service } from "../api"
import { IClient } from "../../../types/client"
import { botStatus } from "./botStatus";

class _BotService extends Service {
    status = async () => this.api.get<botStatus>("/bot/status").then(res => res.data)
}

export const BotService = new _BotService();