import { spawnSync } from "child_process";
import * as fs from "fs";
import * as vscode from "vscode";
import components from "./lib/commands/components";
import docs from "./lib/commands/docs";
import setup from "./lib/commands/setup";
import { isPyRevitInstalled } from "./lib/constants/pyRevitPaths";
import revitApiStubsPath from "./lib/constants/revitApiStubsPath";
import checkOs from "./lib/utils/checkOs";
import checkMaterialIconThemeExtension from "./lib/utils/setup/checkMaterialIconThemeExtension";
import checkPyRevitLib from "./lib/utils/setup/checkPyRevitLib";
import checkPythonExtension from "./lib/utils/setup/checkPythonExtension";
import checkPythonInstallation from "./lib/utils/setup/checkPythonInstallation";
import checkRevitApiStubs from "./lib/utils/setup/checkRevitApiStubs";
import updateVscSettings from "./lib/utils/setup/updateVscSettings";
import updateMaterialIconsConfig from "./lib/utils/updateMaterialIconsConfig";

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
    if (!isPyRevitInstalled()) {
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

    if (!vscode.extensions.getExtension("pkief.material-icon-theme")) {
      checkMaterialIconThemeExtension();
    } else {
      updateMaterialIconsConfig();
    }
    // Create a watcher to detect new folders being added
    const watcher = vscode.workspace.createFileSystemWatcher(
      "**/{*.extension,*.tab,*.panel,*.stack,*.pulldown,*.pushbutton,*.urlbutton}"
    );

    // Trigger the update when a new matching folder is created
    watcher.onDidCreate(async (uri) => {
      console.log(`📁 New folder detected: ${uri.fsPath}`);
      await updateMaterialIconsConfig();
    });

    watcher.onDidChange(async (uri) => {
      console.log(`🔄 Folder changed: ${uri.fsPath}`);
      await updateMaterialIconsConfig();
    });

    watcher.onDidDelete(async (uri) => {
      console.log(`🗑️ Folder deleted: ${uri.fsPath}`);
      await updateMaterialIconsConfig();
    });

    // Cleanup the watcher when the extension is deactivated
    context.subscriptions.push(watcher);
  }

  // Read "pyrevit-with-vscode.author" in setting.json
  // setAuthor();

  // Extension "pyrevit-with-vscode" is now active!
  console.log('Extension "pyrevit-with-vscode" is now active!');
}

export function deactivate() {
  // Extension "pyrevit-with-vscode" is now deactivated
  console.log('Extension "pyrevit-with-vscode" is now deactivated');
}
