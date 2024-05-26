import electron from "electron"

export const appElectron = electron.app

function createTray() {
    const tray = new electron.Tray("./resources/public/icon.png")
    const contextMenu = electron.Menu.buildFromTemplate([
        { label: "Fechar", type: "normal", click: () => appElectron.quit(), role: "quit" },
    ])
    tray.setToolTip('Tropical Ice server')
    tray.setContextMenu(contextMenu)
}

export const StartAppTray = () => {
    appElectron.on("ready", createTray)
}
