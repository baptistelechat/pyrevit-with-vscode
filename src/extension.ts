import { spawnSync } from "child_process";
import * as fs from "fs";
import * as vscode from "vscode";
import components from "./lib/commands/components";
import docs from "./lib/commands/docs";
import setup from "./lib/commands/setup";
import pyRevitMasterPath from "./lib/constants/pyRevitMasterPath";
import pyRevitPath from "./lib/constants/pyRevitPath";
import revitApiStubsPath from "./lib/constants/revitApiStubsPath";
import checkOs from "./lib/utils/checkOs";
import checkPyRevitLib from "./lib/utils/setup/checkPyRevitLib";
import checkPythonExtension from "./lib/utils/setup/checkPythonExtension";
import checkPythonInstallation from "./lib/utils/setup/checkPythonInstallation";
import checkRevitApiStubs from "./lib/utils/setup/checkRevitApiStubs";
import updateVscSettings from "./lib/utils/setup/updateVscSettings";

export function activate(context: vscode.ExtensionContext) {
  const windowsOs = checkOs();

  // Add commands to extension context
  context.subscriptions.push(setup);
  context.subscriptions.push(docs(context));
  context.subscriptions.push(components);
  // context.subscriptions.push(replaceAuthorInSnippets);

  if (windowsOs) {
    // Check if Python is installed
    const { status, stdout } = spawnSync("python", ["--version"]);
    if (status || !stdout.toString().trim().startsWith("Python")) {
      checkPythonInstallation();
    }

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
    const config = vscode.workspace.getConfiguration();
    const autoCompleteExtraPaths = config.get<string[]>(
      "python.autoComplete.extraPaths"
    );
    const analysisExtraPaths = config.get<string[]>(
      "python.analysis.extraPaths"
    );
    if (
      !autoCompleteExtraPaths ||
      autoCompleteExtraPaths.length === 0 ||
      !analysisExtraPaths ||
      analysisExtraPaths.length === 0
    ) {
      updateVscSettings();
    }

    // Read "pyrevit-with-vscode.author" in setting.json
    // setAuthor();

    // Extension "pyrevit-with-vscode" is now active!
    console.log('Extension "pyrevit-with-vscode" is now active!');
  }
}

export function deactivate() {
  // Extension "pyrevit-with-vscode" is now deactivated
  console.log('Extension "pyrevit-with-vscode" is now deactivated');
}
