import * as vscode from "vscode";

const installPythonExtension = () => {
  // Vérifier si l'extension Python est installée
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

  // Si l'extension Python est installée et activée, poursuivre l'activation de votre extension
  vscode.window.showInformationMessage(
    vscode.l10n.t(
      "The Python extension is installed and activated. You can now use pyRevit-with-vscode."
    )
  );
};

export default installPythonExtension;
