import * as vscode from "vscode";
import { showInformationMessage } from "../showMessage";

const { t } = vscode.l10n;

const checkPythonExtension = () => {
  // Check if the Python extension is installed
  const pythonExtensionId = "ms-python.python";
  const pythonExtension = vscode.extensions.getExtension(pythonExtensionId);

  if (!pythonExtension) {
    vscode.window
      .showErrorMessage(
        t(
          "The Python extension is required to use pyRevit-with-vscode. Do you want to install or enable it now?"
        ),
        t("Install"),
        t("Enable")
      )
      .then((action) => {
        if (action === t("Install")) {
          vscode.commands.executeCommand(
            "workbench.extensions.search",
            pythonExtensionId
          );
          vscode.commands.executeCommand(
            "workbench.extensions.installExtension",
            pythonExtensionId
          );
        }
        if (action === t("Enable")) {
          vscode.commands.executeCommand(
            "workbench.extensions.search",
            pythonExtensionId
          );
        }
      });
  } else {
    showInformationMessage(
      "The Python extension is already installed and activated."
    );
  }
};

export default checkPythonExtension;
