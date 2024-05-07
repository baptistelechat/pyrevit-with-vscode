import * as fs from "fs";
import * as path from "path";
import * as vscode from "vscode";
import defaultPyRevitScript from "../../constants/defaultPyRevitScript";
import createDirectory from "./utils/createDirectory";
import getDirectories from "./utils/getDirectories";
import selectExtension from "./utils/selectExtension";
import selectPanel from "./utils/selectPanel";
import selectTab from "./utils/selectTab";

const { t } = vscode.l10n;

const createPushButton = async () => {
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

  const selectedExtensionPath = extensionDirectories.find(
    (dir) => path.basename(dir, ".extension") === selectedExtension
  );

  if (typeof selectedExtensionPath === "string") {
    const tabDirectories = getDirectories(selectedExtensionPath).filter((dir) =>
      dir.endsWith(".tab")
    );

    if (tabDirectories.length === 0) {
      vscode.window.showErrorMessage(t("No tab found."));
      return;
    }

    const selectedTab = await selectTab(tabDirectories);

    if (!selectedTab) {
      vscode.window.showInformationMessage(t("No tab selected."));
      return;
    }

    const selectedTabPath = tabDirectories.find(
      (dir) => path.basename(dir, ".tab") === selectedTab
    );

    if (typeof selectedTabPath === "string") {
      const panelDirectories = getDirectories(selectedTabPath).filter((dir) =>
        dir.endsWith(".panel")
      );

      if (panelDirectories.length === 0) {
        vscode.window.showErrorMessage(t("No panel found."));
        return;
      }

      const selectedPanel = await selectPanel(panelDirectories);

      if (!selectedPanel) {
        vscode.window.showInformationMessage(t("No panel selected."));
        return;
      }

      const selectedPanelPath = panelDirectories.find(
        (dir) => path.basename(dir, ".panel") === selectedPanel
      );

      if (typeof selectedPanelPath === "string") {
        const buttonName = await vscode.window.showInputBox({
          prompt: t("📝 Enter the name of the button"),
        });

        if (buttonName) {
          const buttonPath = path.join(
            selectedPanelPath,
            `${buttonName}.pushbutton`
          );

          createDirectory(buttonPath);

          const scriptPath = path.join(buttonPath, "script.py");
          const iconPath = path.join(buttonPath, "icon.png");

          fs.writeFileSync(scriptPath, defaultPyRevitScript(buttonName));

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
            t("PushButton created successfully")
          );
        }
      }
    }
  }
};

export default createPushButton;
