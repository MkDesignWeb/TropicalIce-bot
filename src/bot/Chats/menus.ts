
type MenuItem = { name: string, stock: boolean }

export type MenuProps = MenuItem[]

export const InitialMenuChat = [
    "MakeWish",
    "CallAttendant",
    "ViewFreight"
]

export const SelectQuantityMenuChat = [
    "SingleOrder",
    "MultipleOrder"
]

export const GlassesMenuChat: MenuProps = [
    {name: "300ml", stock: true},
    {name: "400ml", stock: false},
    {name: "500ml", stock: true}
]

export const FlavorMenuChat: MenuProps = [
    {name: "Açaí", stock: true},
    {name: "Ninho", stock: true},
]

export const SyrupMenuChat: MenuProps = [
    {name: "Leito condensado", stock: true},
    {name: "Chocolate", stock: true},
    {name: "Morango", stock: true},
]