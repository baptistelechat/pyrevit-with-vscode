import * as os from "os";
import * as path from "path";

const revitApiStubsPath = path.join(
  os.homedir(),
  "AppData",
  "Roaming",
  "RevitAPI stubs"
);

export default revitApiStubsPath;
