import * as fs from "fs";
import * as os from "os";
import * as path from "path";

export const appdataPyRevitMasterPath = path.join(
  os.homedir(),
  "AppData",
  "Roaming",
  "pyRevit-Master"
);

const appdataPyRevitPath = path.join(
  os.homedir(),
  "AppData",
  "Roaming",
  "pyRevit"
);

export const programFilesPyRevitMasterPath = path.join(
  process.env.ProgramFiles || "C:\\Program Files",
  "pyRevit-Master"
);

const programDataPyRevitPath = path.join(
  process.env.ProgramData || "C:\\ProgramData",
  "pyRevit"
);

export const isPyRevitInstalled = () => {
  return (
    fs.existsSync(appdataPyRevitMasterPath) ||
    fs.existsSync(appdataPyRevitPath) ||
    fs.existsSync(programFilesPyRevitMasterPath) ||
    fs.existsSync(programDataPyRevitPath)
  );
};
