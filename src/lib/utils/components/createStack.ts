import * as path from "path";
import * as vscode from "vscode";
import {
  defaultDarkIconPath,
  defaultLightIconPath,
} from "../../constants/defaultIconPath";
import defaultPyRevitScript from "../../constants/defaultPyRevitScript";
import { showErrorMessage, showInformationMessage } from "../showMessage";
import createExtension from "./createExtension";
import copyFile from "./utils/copyFile";
import createDirectory from "./utils/createDirectory";
import createFileWithContent from "./utils/createFileWithContent";
import getDirectories from "./utils/getDirectories";
import selectExtension from "./utils/selectExtension";
import selectPanel from "./utils/selectPanel";
import selectTab from "./utils/selectTab";

const { t } = vscode.l10n;

const createStack = async () => {
  const workspacePath = vscode.workspace.workspaceFolders?.[0]?.uri.fsPath;
  if (!workspacePath) {
    showErrorMessage("No workspace folder found.");
    return;
  }

  const extensionDirectories = getDirectories(workspacePath).filter((dir) =>
    dir.endsWith(".extension")
  );

  if (extensionDirectories.length === 0) {
    showErrorMessage("No extension found.");
    return;
  }

  const selectedExtension = await selectExtension(extensionDirectories);

  if (!selectedExtension) {
    showInformationMessage("No extension selected.");
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
    const tabDirectories = getDirectories(selectedExtensionPath).filter((dir) =>
      dir.endsWith(".tab")
    );

    if (tabDirectories.length === 0) {
      showErrorMessage("No tab found.");
      return;
    }

    const selectedTab = await selectTab(tabDirectories);

    if (!selectedTab) {
      showInformationMessage("No tab selected.");
      return;
    }

    let selectedTabPath: string | undefined;

    if (selectedTab === "+ New Value") {
      const tabName = await vscode.window.showInputBox({
        prompt: t("📁 Enter the name of the tab"),
      });
      const tabPath = path.join(selectedExtensionPath, `${tabName}.tab`);
      createDirectory(tabPath);
      selectedTabPath = tabPath;
    } else {
      selectedTabPath = tabDirectories.find(
        (dir) => path.basename(dir, ".tab") === selectedTab
      );
    }

    if (typeof selectedTabPath === "string") {
      let selectedPanelPath: string | undefined;

      if (selectedTab === "+ New Value") {
        const panelName = await vscode.window.showInputBox({
          prompt: t("📦 Enter the name of the panel"),
        });
        const panelPath = path.join(selectedTabPath, `${panelName}.panel`);
        createDirectory(panelPath);
        selectedPanelPath = panelPath;
      } else {
        const panelDirectories = getDirectories(selectedTabPath).filter((dir) =>
          dir.endsWith(".panel")
        );

        if (panelDirectories.length === 0) {
          showErrorMessage("No panel found.");
          return;
        }

        const selectedPanel = await selectPanel(panelDirectories);

        if (!selectedPanel) {
          showInformationMessage("No panel selected.");
          return;
        }

        if (selectedPanel === "+ New Value") {
          const panelName = await vscode.window.showInputBox({
            prompt: t("📦 Enter the name of the panel"),
          });
          const panelPath = path.join(selectedTabPath, `${panelName}.panel`);
          createDirectory(panelPath);
          selectedPanelPath = panelPath;
        } else {
          selectedPanelPath = panelDirectories.find(
            (dir) => path.basename(dir, ".panel") === selectedPanel
          );
        }
      }

      if (typeof selectedPanelPath === "string") {
        const stackName = await vscode.window.showInputBox({
          prompt: t("🗃️ Enter the name of the stack"),
        });

        if (stackName) {
          const stackPath = path.join(selectedPanelPath, `${stackName}.stack`);

          createDirectory(stackPath);

          Array.from({ length: 3 }, (_, i) => {
            const buttonName = `Hello World ${i + 1}`;
            const buttonPath = path.join(stackPath, `${buttonName}.pushbutton`);

            createDirectory(buttonPath);

            const scriptPath = path.join(buttonPath, "script.py");
            createFileWithContent(scriptPath, defaultPyRevitScript(buttonName));

            const iconPath = path.join(buttonPath, "icon.png");
            const iconDarkPath = path.join(buttonPath, "icon.dark.png");

            copyFile(defaultDarkIconPath, iconPath);
            copyFile(defaultLightIconPath, iconDarkPath);
          });

          showInformationMessage("Stack created successfully");
        }
      }
    }
  }
};

export default createStack;
