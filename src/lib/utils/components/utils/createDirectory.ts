import * as fs from "fs";

const createDirectory = (filePath: string) => {
  if (!fs.existsSync(filePath)) {
    fs.mkdirSync(filePath);
  }
};

export default createDirectory;
