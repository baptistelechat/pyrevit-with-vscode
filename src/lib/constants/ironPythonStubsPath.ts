import * as os from "os";
import * as path from "path";

export const ironPythonStubsPath = path.join(
  os.homedir(),
  "AppData",
  "Roaming",
  "RevitAPI stubs",
  "ironpython-stubs",
  "release",
  "stubs.min"
);
