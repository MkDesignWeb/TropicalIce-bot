export type SendMenuTextProps = {
    message: string,
    back?: boolean,
    finish?: boolean,
    SpeakAttendant?: boolean
}

export const SendMenuText = ({
    message,
    SpeakAttendant,
    back,
    finish
}: SendMenuTextProps) => {
    const textFinish = finish ? "Digite *FINALIZAR* para finalizar a seleção\n" : ""
    const textAttendant = SpeakAttendant ? "Digite *ATENDENTE* para falar com um atendente\n" : ""

    const textSeparator = finish || back || SpeakAttendant ? "\n\n" : ""

    const text = `${message}${textSeparator}${textFinish}${textAttendant}`

    return text
}