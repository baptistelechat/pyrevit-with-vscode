import * as fs from "fs";
import * as path from "path";
import * as vscode from "vscode";
import defaultPyRevitScript from "../../constants/defaultPyRevitScript";
import createExtension from "./createExtension";
import createDirectory from "./utils/createDirectory";
import getDirectories from "./utils/getDirectories";
import selectExtension from "./utils/selectExtension";

const { t } = vscode.l10n;

const createTab = async () => {
  const workspacePath = vscode.workspace.workspaceFolders?.[0]?.uri.fsPath;
  if (!workspacePath) {
    vscode.window.showErrorMessage(t("No workspace folder found."));
    return;
  }

  const extensionDirectories = getDirectories(workspacePath).filter((dir) =>
    dir.endsWith(".extension")
  );

  if (extensionDirectories.length === 0) {
    vscode.window.showErrorMessage(t("No extension found."));
    return;
  }

  const selectedExtension = await selectExtension(extensionDirectories);

  if (!selectedExtension) {
    vscode.window.showInformationMessage(t("No extension selected."));
    return;
  }

  if (selectedExtension === "+ New Value") {
    createExtension();
    return;
  }

  const selectedExtensionPath = extensionDirectories.find(
    (dir) => path.basename(dir, ".extension") === selectedExtension
  );

  if (typeof selectedExtensionPath === "string") {
    const tabName = await vscode.window.showInputBox({
      prompt: t("📝 Enter the name of the tab"),
    });

    if (tabName) {
      const tabPath = path.join(selectedExtensionPath, `${tabName}.tab`);
      const panelPath = path.join(tabPath, "New Panel.panel");
      const buttonPath = path.join(panelPath, "Hello World.pushbutton");

      createDirectory(tabPath);
      createDirectory(panelPath);
      createDirectory(buttonPath);

      const scriptPath = path.join(buttonPath, "script.py");
      const iconPath = path.join(buttonPath, "icon.png");

      fs.writeFileSync(scriptPath, defaultPyRevitScript("Hello World"));

      const defaultIconPath = path.join(
        __dirname,
        "..",
        "..",
        "..",
        "..",
        "src",
        "lib",
        "assets",
        "img",
        "pyRevitLogo_black.png"
      );
      fs.copyFileSync(defaultIconPath, iconPath);

      vscode.window.showInformationMessage(t("Tab created successfully"));
    }
  }
};

export default createTab;
