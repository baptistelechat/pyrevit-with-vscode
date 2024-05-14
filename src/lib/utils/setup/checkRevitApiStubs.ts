import * as fs from "fs";
import * as path from "path";
import * as vscode from "vscode";
import revitApiStubsPath from "../../constants/revitApiStubsPath";
import { showInformationMessage } from "../showMessage";

const { t } = vscode.l10n;

const checkRevitApiStubs = () => {
  // Check if Revit API Stubs are installed
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

  if (!fs.existsSync(revitApiStubsPath)) {
    vscode.window
      .showErrorMessage(
        t(
          "The Revit API Stubs are required to use pyRevit-with-vscode. Do you want to download it now?"
        ),
        t("Download")
      )
      .then((action) => {
        if (action === t("Download")) {
          fs.mkdirSync(revitApiStubsPath, { recursive: true });
          fs.cpSync(sourcePath, revitApiStubsPath, { recursive: true });
          showInformationMessage(
            "The Revit API Stubs are download and place in %APPDATA%."
          );
        }
      });
  } else {
    showInformationMessage(
      "The Revit API Stubs are already installed in %APPDATA%."
    );
  }
};

export default checkRevitApiStubs;
