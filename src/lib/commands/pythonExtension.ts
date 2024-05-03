import * as vscode from "vscode";

const pythonExtension = vscode.commands.registerCommand(
  "pyrevit-with-vscode.installPythonExtension",
  () => {
    // Check if the Python extension is installed
    const pythonExtensionId = "ms-python.python";
    const pythonExtension = vscode.extensions.getExtension(pythonExtensionId);

    if (!pythonExtension) {
      vscode.window
        .showErrorMessage(
          vscode.l10n.t(
            "The Python extension is required to use pyRevit-with-vscode. Do you want to install or enable it now?"
          ),
          vscode.l10n.t("Install"),
          vscode.l10n.t("Enable")
        )
        .then((action) => {
          if (action === vscode.l10n.t("Install")) {
            vscode.commands.executeCommand(
              "workbench.extensions.search",
              pythonExtensionId
            );
            vscode.commands.executeCommand(
              "workbench.extensions.installExtension",
              pythonExtensionId
            );
          }
          if (action === vscode.l10n.t("Enable")) {
            vscode.commands.executeCommand(
              "workbench.extensions.search",
              pythonExtensionId
            );
          }
        });
      return;
    }

    // vscode.window.showInformationMessage(
    //   vscode.l10n.t("The Python extension is installed and activated.")
    // );
  }
);

export default pythonExtension;
