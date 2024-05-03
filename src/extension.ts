import * as vscode from "vscode";
import installPythonExtensionCommand from "./lib/command/installPythonExtensionCommand";
import checkOs from "./lib/utils/checkOs";

export function activate(context: vscode.ExtensionContext) {
  // Check the user's operating system and display an error message if it's not a win32 user
  const os = checkOs();

  if (os) {
    // Add commands to extension context
    context.subscriptions.push(installPythonExtensionCommand);

    // Display information message when extension is activated
    vscode.commands.executeCommand(
      "pyrevit-with-vscode.installPythonExtension"
    );
  }
}

export function deactivate() {}
