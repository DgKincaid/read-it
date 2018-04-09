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
const os = __importStar(require("os"));
let fileManagerBtn = new HTMLElement();
fileManagerBtn = document.getElementById('open-file-manager');
fileManagerBtn.addEventListener('click', () => {
    electron_1.shell.showItemInFolder(os.homedir());
});
//# sourceMappingURL=renderer.js.map