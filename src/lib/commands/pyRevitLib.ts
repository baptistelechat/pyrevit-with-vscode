import * as fs from "fs";
import * as os from "os";
import * as path from "path";
import * as vscode from "vscode";

const pyRevitLib = vscode.commands.registerCommand(
  "pyrevit-with-vscode.pyRevitLib",
  () => {
    // Check if pyRevit Lib is installed
    const pyRevitPath = path.join(
      os.homedir(),
      "AppData",
      "Roaming",
      "pyRevit"
    );

    const pyRevitMasterPath = path.join(
      os.homedir(),
      "AppData",
      "Roaming",
      "pyRevit-Master"
    );

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
      return;
    }

    // vscode.window.showInformationMessage(
    //   vscode.l10n.t("pyRevit is already installed in %APPDATA%.")
    // );
  }
);

export default pyRevitLib;
