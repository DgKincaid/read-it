import * as fs from 'fs';
import * as path from 'path';
import * as pug from 'pug';

export class View {
    constructor() {
    }

    public getView(viewName: string): any {
        // console.log(templatePath);
        let templatePath = path.join(__dirname, '../sections/select-folder/', viewName + '.pug');
        let source = fs.readFileSync(templatePath, 'utf-8');
        let template = pug.compile(source);

        return template();
    }
}