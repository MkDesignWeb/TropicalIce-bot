import { IClient } from "../../../types/client"

export type GetClientResponse = IClient

export type CreateClientRequest = {
    from: string
    author: string
}