import * as vscode from "vscode";
import pyRevitLib from "./lib/commands/pyRevitLib";
import pythonExtension from "./lib/commands/pythonExtension";
import pythonSettings from "./lib/commands/pythonSettings";
import revitApiStubs from "./lib/commands/revitApiStubs";
import checkOs from "./lib/utils/checkOs";

export function activate(context: vscode.ExtensionContext) {
  const os = checkOs();

  if (os) {
    // Add commands to extension context
    context.subscriptions.push(pythonExtension);
    context.subscriptions.push(revitApiStubs);
    context.subscriptions.push(pyRevitLib);
    context.subscriptions.push(pythonSettings);

    // Display information message when extension is activated
    vscode.commands.executeCommand(
      "pyrevit-with-vscode.installPythonExtension"
    );
    vscode.commands.executeCommand("pyrevit-with-vscode.revitApiStubs");
    vscode.commands.executeCommand("pyrevit-with-vscode.pyRevitLib");

    // Read python extension settings
    const config = vscode.workspace.getConfiguration("python");
    const extraPaths = config.get<string[]>("analysis.extraPaths");
    if (!extraPaths || extraPaths.length === 0) {
      vscode.commands.executeCommand("pyrevit-with-vscode.pythonSettings");
    }
  }
}

export function deactivate() {}
