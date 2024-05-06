import * as vscode from "vscode";
import getDirectories from "./getDirectories";

const getExtensionDirectories = (workspacePath: string) => {
  const extensionDirectories = getDirectories(workspacePath).filter((dir) =>
    dir.endsWith(".extension")
  );

  if (extensionDirectories.length === 0) {
    vscode.window.showErrorMessage(vscode.l10n.t("No extension found."));
    return [];
  }

  return extensionDirectories;
};

export default getExtensionDirectories;
