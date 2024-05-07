import * as vscode from "vscode";
import getDirectories from "./getDirectories";

const { t } = vscode.l10n;

const getTabDirectories = (extensionPath: string) => {
  const tabDirectories = getDirectories(extensionPath).filter((dir) =>
    dir.endsWith(".tab")
  );

  if (tabDirectories.length === 0) {
    vscode.window.showErrorMessage(t("No tab found."));
    return [];
  }

  return tabDirectories;
};

export default getTabDirectories;
