import * as fs from "fs";
import * as vscode from "vscode";
import docs from "./lib/commands/docs";
import setup from "./lib/commands/setup";
import pyRevitMasterPath from "./lib/constants/pyRevitMasterPath";
import pyRevitPath from "./lib/constants/pyRevitPath";
import revitApiStubsPath from "./lib/constants/revitApiStubsPath";
import checkOs from "./lib/utils/checkOs";
import checkPyRevitLib from "./lib/utils/checkPyRevitLib";
import checkPythonExtension from "./lib/utils/checkPythonExtension";
import checkRevitApiStubs from "./lib/utils/checkRevitApiStubs";
import updateVscSettings from "./lib/utils/updateVscSettings";

export function activate(context: vscode.ExtensionContext) {
  const windowsOs = checkOs();

  // Add commands to extension context
  context.subscriptions.push(setup);
  context.subscriptions.push(docs(context));

  if (windowsOs) {
    // Check if the Python extension is installed
    if (!vscode.extensions.getExtension("ms-python.python")) {
      checkPythonExtension();
    }

    // Check if Revit API Stubs are installed
    if (!fs.existsSync(revitApiStubsPath)) {
      checkRevitApiStubs();
    }

    // Check if pyRevit is installed
    if (!fs.existsSync(pyRevitPath) || !fs.existsSync(pyRevitMasterPath)) {
      checkPyRevitLib();
    }

    // Read "python.autoComplete.extraPaths" in setting.json
    const config = vscode.workspace.getConfiguration("python");
    const extraPaths = config.get<string[]>("autoComplete.extraPaths");
    if (!extraPaths || extraPaths.length === 0) {
      updateVscSettings();
    }
  }
}

export function deactivate() {}
