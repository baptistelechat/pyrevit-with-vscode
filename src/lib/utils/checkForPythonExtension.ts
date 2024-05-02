import * as vscode from "vscode";

const checkForPythonExtension = () => {
  // Vérifier si l'extension Python est installée
  const pythonExtensionId = "ms-python.python";
  const pythonExtension = vscode.extensions.getExtension(pythonExtensionId);

  if (!pythonExtension) {
    vscode.window
      .showErrorMessage(
        "pyRevit with VSCode | L'extension Python est requise pour utiliser cette extension. Voulez-vous l'installer ou l'activer maintenant ?",
        "Installer",
        "Activer"
      )
      .then((action) => {
        if (action === "Installer") {
          vscode.commands.executeCommand(
            "workbench.extensions.search",
            pythonExtensionId
          );
          vscode.commands.executeCommand(
            "workbench.extensions.installExtension",
            pythonExtensionId
          );
        }
        if (action === "Activer") {
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
    "pyRevit with VSCode | L'extension Python est installée et activée. Vous pouvez maintenant utiliser cette extension."
  );
};

export default checkForPythonExtension;
