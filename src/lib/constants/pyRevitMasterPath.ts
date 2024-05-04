import * as os from "os";
import * as path from "path";

const pyRevitMasterPath = path.join(
  os.homedir(),
  "AppData",
  "Roaming",
  "pyRevit-Master"
);

export default pyRevitMasterPath;
