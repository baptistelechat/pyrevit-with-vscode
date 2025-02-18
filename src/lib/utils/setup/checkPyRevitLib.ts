import * as vscode from "vscode";
import { isPyRevitInstalled } from "../../constants/pyRevitPaths";
import { showInformationMessage } from "../showMessage";

const { t } = vscode.l10n;

const checkPyRevitLib = () => {
  // Check if pyRevit is installed
  if (!isPyRevitInstalled()) {
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
    showInformationMessage("pyRevit is already installed in %APPDATA%.");
  }
};

export default checkPyRevitLib;
