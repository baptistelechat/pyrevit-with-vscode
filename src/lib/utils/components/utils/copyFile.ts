import * as fs from "fs";

const copyFile = (src: string, dest: string) => {
  fs.copyFileSync(src, dest);
};

export default copyFile;