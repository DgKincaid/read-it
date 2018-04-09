import { app, BrowserWindow } from "electron";
import * as path from "path";
import * as url from "url";

import { SelectFolderMain } from './select-folder/select-folder.main';
import { View } from './view';

let mainWindow: Electron.BrowserWindow | null;

function createWindow() {
  console.log('test');
  mainWindow = new BrowserWindow({
    height: 600,
    width: 800,
  });

  mainWindow.loadURL(url.format({
      pathname: path.join(__dirname, "../index.html"),
      protocol: "file:",
      slashes: true,
  }));

  mainWindow.webContents.openDevTools();

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

app.on("ready", () => {
  createWindow();

  initialize();
  let temp = new View();
  temp.getView('select-folder');
});

app.on("window-all-closed", () => {

  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {

  if (mainWindow === null) {
    createWindow();
  }
});

function initialize(): void {
  SelectFolderMain.init();
}