import * as fs from "fs";
import * as path from "path";
import * as vscode from "vscode";
import defaultPyRevitScript from "../../constants/defaultPyRevitScript";
import getDirectories from "./utils/getDirectories";
import selectExtension from "./utils/selectExtension";
import selectTab from "./utils/selectTab";

const createPanel = async () => {
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
    const tabDirectories = getDirectories(selectedExtensionPath).filter((dir) =>
      dir.endsWith(".tab")
    );

    if (tabDirectories.length === 0) {
      vscode.window.showErrorMessage(vscode.l10n.t("No tab found."));
      return;
    }

    const selectedTab = await selectTab(tabDirectories);

    if (!selectedTab) {
      vscode.window.showInformationMessage(vscode.l10n.t("No tab selected."));
      return;
    }

    const selectedTabPath = tabDirectories.find(
      (dir) => path.basename(dir, ".tab") === selectedTab
    );

    if (typeof selectedTabPath === "string") {
      const panelName = await vscode.window.showInputBox({
        prompt: vscode.l10n.t("📝 Enter the name of the panel"),
      });

      if (panelName) {
        const panelPath = path.join(selectedTabPath, `${panelName}.panel`);

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
          vscode.l10n.t("Panel created successfully")
        );
      }
    }
  }
};

export default createPanel;
