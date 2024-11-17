const electron = require('electron');
const { app, BrowserWindow } = electron;

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 1100,
        autoHideMenuBar: true,
        height: 800
    });
    mainWindow.setTitle('Old Maps Desktop');
    mainWindow.loadURL('https://www.oldmapsonline.org/en/history/');
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
});
