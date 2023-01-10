const { BrowserWindow, app, ipcMain, Notification } = require('electron');

const path = require('path');

const isDev = !app.isPackaged;

const createWindow = () => {

    const mainWindow = new BrowserWindow({
        show:false,
        backgroundColor: 'white',
        webPreferences: {
            nodeIntegration: false,
            worldSafeExecuteJavaScript: true,
            contextIsolation: true,
            preload: path.join(__dirname, 'preload.js')
        }
    });
    mainWindow.maximize();
    //mainWindow.setMenu(null);
    mainWindow.show();

    mainWindow.loadFile('./public/index.html');

}

if (isDev) {
    require('electron-reload')(__dirname, {
        electron: path.join(__dirname, 'node_modules', '.bin','electron.cmd')
    }) 
}

ipcMain.on('notify', (e, message) => {
    new Notification ({
        title: 'Notification',
        'body': message
    }).show();
});

app.whenReady().then(() => {
    createWindow();
});
