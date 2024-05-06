import * as fs from "fs";
import * as path from "path";
import * as vscode from "vscode";
import defaultPyRevitScript from "../../constants/defaultPyRevitScript";
import getDirectories from "./utils/getDirectories";
import selectExtension from "./utils/selectExtension";

const createTab = async () => {
  const workspacePath = vscode.workspace.workspaceFolders?.[0]?.uri.fsPath;
  if (!workspacePath) {
    vscode.window.showErrorMessage(vscode.l10n.t("No workspace folder found."));
    return;
  }

  const extensionDirectories = getDirectories(workspacePath).filter((dir) =>
    dir.endsWith(".extension")
  );

  if (extensionDirectories.length === 0) {
    vscode.window.showErrorMessage(vscode.l10n.t("No extension found."));
    return;
  }

  const selectedExtension = await selectExtension(extensionDirectories);

  if (!selectedExtension) {
    vscode.window.showInformationMessage(
      vscode.l10n.t("No extension selected.")
    );
    return;
  }

  const selectedExtensionPath = extensionDirectories.find(
    (dir) => path.basename(dir, ".extension") === selectedExtension
  );

  if (typeof selectedExtensionPath === "string") {
    const tabName = await vscode.window.showInputBox({
      prompt: vscode.l10n.t("📝 Enter the name of the tab"),
    });

    if (tabName) {
      const tabPath = path.join(selectedExtensionPath, `${tabName}.tab`);

      if (!fs.existsSync(tabPath)) {
        fs.mkdirSync(tabPath);
      }

      const panelPath = path.join(tabPath, "New Panel.panel");

      if (!fs.existsSync(panelPath)) {
        fs.mkdirSync(panelPath);
      }

      const buttonPath = path.join(panelPath, "Hello World.pushbutton");

      if (!fs.existsSync(buttonPath)) {
        fs.mkdirSync(buttonPath);
      }

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

      vscode.window.showInformationMessage(
        vscode.l10n.t("Tab created successfully")
      );
    }
  }
};

export default createTab;
