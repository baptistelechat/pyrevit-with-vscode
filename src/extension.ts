import * as vscode from "vscode";
import checkForPythonExtension from "./lib/utils/checkForPythonExtension";

export function activate(context: vscode.ExtensionContext) {
  // Afficher le message d'information lorsque l'extension est activée
  checkForPythonExtension();

  // Enregistrer une commande pour afficher un message d'information
  const disposable = vscode.commands.registerCommand(
    "pyrevit-with-vscode.showInstallMessage",
    () => {
      checkForPythonExtension();
    }
  );

  // Ajouter la commande au contexte de l'extension
  context.subscriptions.push(disposable);

  // Afficher le message d'information une fois que l'extension est activée
  vscode.commands.executeCommand("pyrevit-with-vscode.showInstallMessage");
}

export function deactivate() {}
