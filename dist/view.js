"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const pug = __importStar(require("pug"));
class View {
    constructor() {
    }
    getView(viewName) {
        // console.log(templatePath);
        let templatePath = path.join(__dirname, '../sections/select-folder/', viewName + '.pug');
        let source = fs.readFileSync(templatePath, 'utf-8');
        let template = pug.compile(source);
        return template();
    }
}
exports.View = View;
//# sourceMappingURL=view.js.map