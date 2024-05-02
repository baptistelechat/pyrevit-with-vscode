import * as vscode from "vscode";

const checkForPythonExtension = () => {
  // Vérifier si l'extension Python est installée
  const pythonExtension = vscode.extensions.getExtension("ms-python.python");
  if (!pythonExtension) {
    vscode.window
      .showErrorMessage(
        "pyRevit with VSCode | L'extension Python est requise pour utiliser cette extension. Voulez-vous l'installer maintenant ?",
        "Installer"
      )
      .then((action) => {
        if (action === "Installer") {
          vscode.commands.executeCommand("workbench.extensions.view");
          vscode.commands.executeCommand(
            "workbench.extensions.search",
            "ms-python.python"
          );
        }
      });
    return;
  }

  // Si l'extension Python est installée, afficher un message d'installation réussie et poursuivre l'activation de votre extension
  vscode.window.showInformationMessage(
    "pyRevit with VSCode | L'extension Python est installée. Vous pouvez maintenant utiliser cette extension."
  );
};

export default checkForPythonExtension;
