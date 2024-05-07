import * as fs from "fs";
import * as vscode from "vscode";
import pyRevitMasterPath from "../../constants/pyRevitMasterPath";
import pyRevitPath from "../../constants/pyRevitPath";

const { t } = vscode.l10n;

const checkPyRevitLib = () => {
  // Check if pyRevit is installed
  if (!fs.existsSync(pyRevitPath) || !fs.existsSync(pyRevitMasterPath)) {
    vscode.window
      .showErrorMessage(
        t(
          "pyRevit is required to use pyRevit-with-vscode. Do you want to download it now?"
        ),
        t("Download")
      )
      .then((action) => {
        if (action === t("Download")) {
          vscode.env.openExternal(
            vscode.Uri.parse("https://github.com/pyrevitlabs/pyRevit/releases")
          );
        }
      });
  } else {
    vscode.window.showInformationMessage(
      t("pyRevit is already installed in %APPDATA%.")
    );
  }
};

export default checkPyRevitLib;
