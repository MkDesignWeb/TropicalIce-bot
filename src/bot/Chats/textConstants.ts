import { GlassesMenuChat } from "./menus"

export const WELCOME = "Olá, bem vindo(a), vamos fazer seu pedido em instantes sem sair do WhatsApp 💜\n\n1 - Fazer pedido 🗒️\n2 - Falar com atendente 🗣️\n3 - Ver taxa de entrega 🛵"

export const FREIGHT = "Temos uma taxa em entregas para Guamaré / Salinas de R$ 3.00 📍"

export const QUANTITY_ORDER = "Diga quantos pedidos iguais você vai fazer antes de começar:\n\n1 - Fazer apenas 1 pedido\n2 - Escolher numero de pedidos iguais"

export const WRITE_QUANTITY_ORDER = "Digite a quantidade de copos iguais que você deseja pedior em *número*. 🍨"

export const CUPS_LIST = `Selecione o tamanho do copo com o número. 🍨\n\n${GlassesMenuChat.map((cup, index) => `${cup.stock ? "*" : "~"}${index + 1} - ${cup.name}${cup.stock ? "*" : "~"}\n`).join("")}`