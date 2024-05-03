import * as vscode from "vscode";
import pythonExtension from "./lib/commands/pythonExtension";
import revitApiStubs from "./lib/commands/revitApiStubs";
import checkOs from "./lib/utils/checkOs";
import pyRevitLib from "./lib/commands/pyrevitLib";

export function activate(context: vscode.ExtensionContext) {
  const os = checkOs();

  if (os) {
    // Add commands to extension context
    context.subscriptions.push(pythonExtension);
    context.subscriptions.push(revitApiStubs);
    context.subscriptions.push(pyRevitLib);

    // Display information message when extension is activated
    vscode.commands.executeCommand(
      "pyrevit-with-vscode.installPythonExtension"
    );
    vscode.commands.executeCommand("pyrevit-with-vscode.revitApiStubs");
    vscode.commands.executeCommand("pyrevit-with-vscode.pyRevitLib");
  }
}

export function deactivate() {}
