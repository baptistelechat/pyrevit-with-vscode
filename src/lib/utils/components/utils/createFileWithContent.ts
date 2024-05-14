import * as fs from "fs";

const createFileWithContent = (filePath: string, content: string) => {
  fs.writeFileSync(filePath, content);
};

export default createFileWithContent;
