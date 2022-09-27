import dateManager from "./dateManager";
import {cropText} from "./index";
import React, {JSXElementConstructor, ReactElement} from "react";

class slog {
    maxLineCount: number = 15;

    lineTop: string = '';
    lines  : string[] = [];

    setTop ( line: string ) {
        this.lineTop = line;
    }

    getTop(): string {
        return this.lineTop;
    }

    add( line:string) {
        let time = dateManager.getCurrentSystemTime(true);
        this.lines.push(time + ': ' + cropText(line,150));
        if (this.lines.length > this.maxLineCount) { this.lines.shift()  }
    }

    get(): string[]  {
        return this.lines
    }

    clear() {
        this.lineTop = '';
        this.lines = [];
    }

    length():number {
        return this.lines.length;
    }
}
export default new slog();
