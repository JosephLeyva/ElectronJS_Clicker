const { app, Menu } = require('electron');

const setMainMenu = (mainWindow) => {
    const templateMenu = [
        {
            label: 'Clicker App',
            submenu: [
                {
                    label: 'Salir',
                    accelerator: process.platform == 'darwin' ? 'command+Q' : 'Ctrl+Q',
                    click: () => app.quit()
                }
            ]
        },
        {
            label: 'Temas',
            accelerator: process.platform == 'darwin' ? 'command+T' : 'Ctrl+T',
            submenu: [
                {
                    label: 'Ligth',
                    click: () => {
                        mainWindow.webContents.send('update-theme', 'ligth');
                    }
                },
                {
                    label: 'Dark',
                    click: () => {
                        mainWindow.webContents.send('update-theme', 'dark');
                    }
                }
            ]
        }
    ]
    const menu = Menu.buildFromTemplate(templateMenu);
    Menu.setApplicationMenu(menu);
}

module.exports = {
    setMainMenu
}