import { Message } from "@wppconnect-team/wppconnect"
import { Service } from "../api"
import { CreateOrderRequest } from "./storageOrder"
import { IClient } from "../../../types/client"

class _StorageOrderService extends Service {
    create = async (orderData: CreateOrderRequest) => this.api.post("/order", orderData)
    selectCup = async (from: string, cup: String) => this.api.post("/order/cup", { from, cup })
}

export const StorageOrderService = new _StorageOrderService();