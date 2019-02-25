import { env } from 'process';
import { join, resolve } from 'path';
import { app, Menu, BrowserWindow } from 'electron';

if(require('electron-squirrel-startup')) app.quit();

let win;

const template = [
  {
    label: 'Application',
    submenu: [
      { label: 'Quit', accelerator: 'CmdOrCtrl+Q', click() { app.quit(); } },
    ],
  },
  {
    label: 'Edit',
    submenu: [
      { label: 'Undo', accelerator: 'CmdOrCtrl+Z', selector: 'undo:' },
      { label: 'Redo', accelerator: 'Shift+CmdOrCtrl+Z', selector: 'redo:' },
      { type: "separator" },
      { label: 'Cut', accelerator: 'CmdOrCtrl+X', selector: 'cut:' },
      { label: 'Copy', accelerator: 'CmdOrCtrl+C', selector: 'copy:' },
      { label: 'Paste', accelerator: 'CmdOrCtrl+V', selector: 'paste:' },
      { label: 'Select All', accelerator: 'CmdOrCtrl+A', selector: 'selectAll:' }
    ],
  },
];

const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);

function createWindow() {
  win = new BrowserWindow({
    center: true,
    width: 1118,
    height: 800,
    minWidth: 1118,
    minHeight: 800,
    title: 'NKNWallet',
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
