import { Whatsapp } from "@wppconnect-team/wppconnect"
import { stages } from "./Chats/stages";
import { StorageClientService } from "./Services/storageClientService";
import { BotService } from "./Services/BotService";
import { WELCOME } from "./Chats/textConstants";

export async function start(client: Whatsapp) {
  client.onMessage(async message => {
    
    if (!message.isGroupMsg) {
      const botStatus = await BotService.status()

      if (botStatus === "on") {
        await StorageClientService.get(message.from).then(res => {
          if (res.data.chatBot === true) {
            stages.map(chat => {
              if (res.data.stage === chat.stage) {
                chat.function(message, client)
              }
            })
          }
        }).catch(e => {
          if(message.body.toLowerCase() === "teste") {
            client.sendText(message.from, WELCOME)
            StorageClientService.create({ author: message.author, from: message.from })
          }
        } )
      } else {
        console.log("CHAT OFF")
      }

    }
  })
}
