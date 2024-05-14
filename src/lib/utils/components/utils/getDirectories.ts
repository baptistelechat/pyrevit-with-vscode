import * as fs from "fs";
import * as path from "path";

const getDirectories = (srcpath: string) => {
  return fs
    .readdirSync(srcpath)
    .filter((file) => fs.statSync(path.join(srcpath, file)).isDirectory())
    .map((file) => path.join(srcpath, file));
};

export default getDirectories;
