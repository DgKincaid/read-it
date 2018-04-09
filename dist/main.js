"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const path = __importStar(require("path"));
const url = __importStar(require("url"));
const select_folder_main_1 = require("./select-folder/select-folder.main");
const view_1 = require("./view");
let mainWindow;
function createWindow() {
    console.log('test');
    mainWindow = new electron_1.BrowserWindow({
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
electron_1.app.on("ready", () => {
    createWindow();
    initialize();
    let temp = new view_1.View();
    temp.getView('select-folder');
});
electron_1.app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        electron_1.app.quit();
    }
});
electron_1.app.on("activate", () => {
    if (mainWindow === null) {
        createWindow();
    }
});
function initialize() {
    select_folder_main_1.SelectFolderMain.init();
}
//# sourceMappingURL=main.js.map