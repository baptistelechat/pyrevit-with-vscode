import { spawnSync } from "child_process";
import * as vscode from "vscode";
import { showInformationMessage } from "../showMessage";

const { t } = vscode.l10n;

const checkPythonInstallation = () => {
  // Check if the Python is installed
  try {
    const { status, stdout } = spawnSync("python", ["--version"]);
    if (!status && stdout.toString().trim().startsWith("Python")) {
      showInformationMessage("Python is correctly installed on the computer");
    } else {
      vscode.window
        .showErrorMessage(
          t(
            "Python is not installed or not found in PATH. Do you want to install it now?"
          ),
          t("Open python.org"),
          t("Open Microsoft store")
        )
        .then((action) => {
          if (action === t("Open python.org")) {
            vscode.env.openExternal(
              vscode.Uri.parse("https://www.python.org/downloads/")
            );
          }
          if (action === t("Open Microsoft store")) {
            vscode.env.openExternal(
              vscode.Uri.parse("https://apps.microsoft.com/search?query=python")
            );
          }
        });
    }
  } catch (error) {
    console.log("Error while checking Python installation:", error);
  }
};

export default checkPythonInstallation;
