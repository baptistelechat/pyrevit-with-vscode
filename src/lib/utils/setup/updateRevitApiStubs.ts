import * as fs from "fs";
import * as path from "path";
import revitApiStubsPath from "../../constants/revitApiStubsPath";
import { showInformationMessage } from "../showMessage";

export const updateRevitApiStubs = () => {
  const sourcePath = path.join(
    __dirname,
    "..",
    "..",
    "..",
    "..",
    "src",
    "lib",
    "assets",
    "RevitAPI stubs"
  );

  fs.mkdirSync(revitApiStubsPath, { recursive: true });
  fs.cpSync(sourcePath, revitApiStubsPath, { recursive: true });
  showInformationMessage(
    "The Revit API Stubs are download and place in %APPDATA%."
  );
};
