import * as vscode from "vscode";
import installPythonExtensionCommand from "./lib/command/installPythonExtensionCommand";
import installPythonExtension from "./lib/utils/installPythonExtension";

export function activate(context: vscode.ExtensionContext) {
  // Afficher le message d'information lorsque l'extension est activée
  installPythonExtension();

  // Ajouter les commandes au contexte de l'extension
  context.subscriptions.push(installPythonExtensionCommand);

  // Afficher le message d'information une fois que l'extension est activée
  vscode.commands.executeCommand("pyrevit-with-vscode.installPythonExtension");
}

export function deactivate() {}
