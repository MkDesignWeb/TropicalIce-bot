export type IOrder = {
    from: string
    open: boolean
    quantity: number
    cup?: string
    flavor?: string
    roof?: string
}

export type IClient = {
    from: string
    author: string
    chatBot: boolean
    stage: number
}