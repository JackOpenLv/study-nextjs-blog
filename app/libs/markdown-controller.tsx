import fs from "fs";
import {join} from "path";

export function getMarkdownContent(fileName: string) {
    const fullPath = join(process.cwd(), "posts");
    const markdownName = join(fullPath, fileName);
    const content = fs.readFileSync(markdownName, "utf8");
    return content;
}
