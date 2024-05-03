import * as fs from "fs";
import * as os from "os";
import * as path from "path";
import * as vscode from "vscode";

const copyRevitApiStubs = vscode.commands.registerCommand(
  "pyrevit-with-vscode.copyRevitApiStubs",
  () => {
    // Check if Revit API Stubs are installed
    const sourcePath = path.join(
      __dirname,
      "..",
      "..",
      "..",
      "src",
      "lib",
      "assets",
      "RevitAPI stubs"
    );
    const targetPath = path.join(
      os.homedir(),
      "AppData",
      "Roaming",
      "RevitAPI stubs"
    );

    if (!fs.existsSync(targetPath)) {
      vscode.window
        .showErrorMessage(
          vscode.l10n.t(
            "The Revit API Stubs are required to use pyRevit-with-vscode. Do you want to download it now?"
          ),
          vscode.l10n.t("Download")
        )
        .then((action) => {
          if (action === vscode.l10n.t("Download")) {
            fs.mkdirSync(targetPath, { recursive: true });
            fs.cpSync(sourcePath, targetPath, { recursive: true });
            vscode.window.showInformationMessage(
              vscode.l10n.t(
                "The Revit API Stubs are download and place in %APPDATA%."
              )
            );
          }
        });
      return;
    }

    vscode.window.showInformationMessage(
      vscode.l10n.t(
        "The Revit API Stubs are download and place in %APPDATA%."
      )
    );
  }
);

export default copyRevitApiStubs;
