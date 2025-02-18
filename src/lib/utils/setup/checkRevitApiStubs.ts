import * as fs from "fs";
import * as path from "path";
import * as vscode from "vscode";
import revitApiStubsPath from "../../constants/revitApiStubsPath";
import { showInformationMessage } from "../showMessage";
import { updateRevitApiStubs } from "./updateRevitApiStubs";
import updateVscSettings from "./updateVscSettings";

const { t } = vscode.l10n;

const checkRevitApiStubs = () => {
  // Check if Revit API Stubs are installed
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
          updateRevitApiStubs();
          updateVscSettings();
        }
      });
  } else {
    showInformationMessage(
      "The Revit API Stubs are already installed in %APPDATA%."
    );
  }
};

export default checkRevitApiStubs;
