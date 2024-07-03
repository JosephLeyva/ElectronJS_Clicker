const { app, BrowserWindow } = require('electron')
const { setMainMenu } = require('./menu')

let mainWindow = null

const createWindow = () => {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        minHeight: 400,
        minWidth: 400,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    })

    mainWindow.loadFile(__dirname + '/views/index.html')
    setMainMenu(mainWindow)
}

app.whenReady().then(createWindow)