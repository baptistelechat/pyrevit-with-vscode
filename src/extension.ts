import * as fs from "fs";
import * as vscode from "vscode";
import pyRevitDocs from "./lib/commands/pyRevitDocs";
import pyRevitLib from "./lib/commands/pyRevitLib";
import pythonExtension from "./lib/commands/pythonExtension";
import pythonSettings from "./lib/commands/pythonSettings";
import revitApiDocs from "./lib/commands/revitApiDocs";
import revitApiStubs from "./lib/commands/revitApiStubs";
import pyRevitMasterPath from "./lib/constants/pyRevitMasterPath";
import pyRevitPath from "./lib/constants/pyRevitPath";
import revitApiStubsPath from "./lib/constants/revitApiStubsPath";
import checkOs from "./lib/utils/checkOs";

export function activate(context: vscode.ExtensionContext) {
  const windowsOs = checkOs();

  if (windowsOs) {
    // Add commands to extension context
    context.subscriptions.push(pythonExtension);
    context.subscriptions.push(revitApiStubs);
    context.subscriptions.push(pyRevitLib);
    context.subscriptions.push(pythonSettings);
    context.subscriptions.push(revitApiDocs(context));
    context.subscriptions.push(pyRevitDocs(context));

    // Check if the Python extension is installed
    if (!vscode.extensions.getExtension("ms-python.python")) {
      vscode.commands.executeCommand("pyrevit-with-vscode.pythonExtension");
    }

    // Check if Revit API Stubs are installed
    if (!fs.existsSync(revitApiStubsPath)) {
      vscode.commands.executeCommand("pyrevit-with-vscode.revitApiStubs");
    }

    // Check if pyRevit is installed
    if (!fs.existsSync(pyRevitPath) || !fs.existsSync(pyRevitMasterPath)) {
      vscode.commands.executeCommand("pyrevit-with-vscode.pyRevitLib");
    }

    // Read "python.autoComplete.extraPaths" in setting.json
    const config = vscode.workspace.getConfiguration("python");
    const extraPaths = config.get<string[]>("autoComplete.extraPaths");
    if (!extraPaths || extraPaths.length === 0) {
      vscode.commands.executeCommand("pyrevit-with-vscode.pythonSettings");
    }
  }
}

export function deactivate() {}
