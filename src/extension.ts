import * as vscode from "vscode";
import checkOs from "./lib/utils/checkOs";
import copyRevitApiStubs from "./lib/commands/copyRevitApiStubs";
import installPythonExtension from "./lib/commands/installPythonExtension";

export function activate(context: vscode.ExtensionContext) {
  
  const os = checkOs();

  if (os) {
    // Add commands to extension context
    context.subscriptions.push(installPythonExtension);
    context.subscriptions.push(copyRevitApiStubs);

    // Display information message when extension is activated
    vscode.commands.executeCommand(
      "pyrevit-with-vscode.installPythonExtension"
    );
    vscode.commands.executeCommand("pyrevit-with-vscode.copyRevitApiStubs");
  }
}

export function deactivate() {}
