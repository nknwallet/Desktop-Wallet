import { env } from 'process';
import { join, resolve } from 'path';
import { app, BrowserWindow } from 'electron';

let win;

function createWindow() {
  win = new BrowserWindow({
    center: true,
    width: 1118,
    height: 800,
    minWidth: 1118,
    minHeight: 800,
    title: 'Wallet',
    icon: join(__dirname, 'src/images/icons/256x256.png'),
  });

  win.loadURL(`file://${resolve(__dirname, 'index.html#/initializing')}`);

  if (env.NODE_ENV === 'development') {
    win.webContents.openDevTools();
  }

  win.on('closed', () => {
    win = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});
