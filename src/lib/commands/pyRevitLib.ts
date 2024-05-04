import * as fs from "fs";
import * as vscode from "vscode";
import pyRevitMasterPath from "../constants/pyRevitMasterPath";
import pyRevitPath from "../constants/pyRevitPath";

const pyRevitLib = vscode.commands.registerCommand(
  "pyrevit-with-vscode.pyRevitLib",
  () => {
    // Check if pyRevit is installed
    if (!fs.existsSync(pyRevitPath) || !fs.existsSync(pyRevitMasterPath)) {
      vscode.window
        .showErrorMessage(
          vscode.l10n.t(
            "pyRevit is required to use pyRevit-with-vscode. Do you want to download it now?"
          ),
          vscode.l10n.t("Download")
        )
        .then((action) => {
          if (action === vscode.l10n.t("Download")) {
            vscode.env.openExternal(
              vscode.Uri.parse(
                "https://github.com/pyrevitlabs/pyRevit/releases"
              )
            );
          }
        });
    } else {
      vscode.window.showInformationMessage(
        vscode.l10n.t("pyRevit is already installed in %APPDATA%.")
      );
    }
  }
);

export default pyRevitLib;
