import { shell } from 'electron';
import * as os from 'os';

const fileManagerBtn = document.getElementById('open-file-manager')!;

fileManagerBtn.addEventListener('click', () => {
    // shell.showItemInFolder(os.homedir());
})