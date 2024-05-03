import * as vscode from "vscode";
import installPythonExtension from "../utils/installPythonExtension";

const installPythonExtensionCommand = vscode.commands.registerCommand(
  "pyrevit-with-vscode.installPythonExtension",
  () => {
    installPythonExtension();
  }
);

export default installPythonExtensionCommand;
