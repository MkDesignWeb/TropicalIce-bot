import { Message, Whatsapp } from "@wppconnect-team/wppconnect";
import { InitialMenu } from "./Chat/InitialMenu";
import { SelectQuantityMenu } from "./Chat/SelectQuantityMenu";
import { WriteQuantityMenu } from "./Chat/WriteQuantityMenu";
import { SelectCupMenu } from "./Chat/SelectCupMenu";
import { SelectSyrupMenu } from "./Chat/SelectSyrupMenu";


type stageItemProps =  {
    name: string,
    stage: number,
    function: (message: Message, client: Whatsapp) => void,
}

type stagesProps = stageItemProps[]

export const stages: stagesProps = [
    {
        name: "Menu inicial",
        stage: 1,
        function: InitialMenu
    },
    {
        name: "Quantidade de copos",
        stage: 2,
        function: SelectQuantityMenu
    },
    {
        name: "Escrever quantidade de copos",
        stage: 3,
        function: WriteQuantityMenu
    },
    {
        name: "Selecionar copo",
        stage: 4,
        function: SelectCupMenu
    },
    {
        name: "Selecionar cobertura",
        stage: 5,
        function: SelectSyrupMenu
    },


]