import * as vscode from "vscode";
import getDirectories from "./getDirectories";

const getPanelDirectories = (tabPath: string) => {
  const panelDirectories = getDirectories(tabPath).filter((dir) =>
    dir.endsWith(".panel")
  );

  if (panelDirectories.length === 0) {
    vscode.window.showErrorMessage(vscode.l10n.t("No panel found."));
    return [];
  }

  return panelDirectories;
};

export default getPanelDirectories;
