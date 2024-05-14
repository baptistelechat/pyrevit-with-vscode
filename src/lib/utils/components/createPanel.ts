import * as path from "path";
import * as vscode from "vscode";
import defaultPyRevitScript from "../../constants/defaultPyRevitScript";
import { showErrorMessage, showInformationMessage } from "../showMessage";
import createExtension from "./createExtension";
import copyFile from "./utils/copyFile";
import createDirectory from "./utils/createDirectory";
import createFileWithContent from "./utils/createFileWithContent";
import getDirectories from "./utils/getDirectories";
import selectExtension from "./utils/selectExtension";
import selectTab from "./utils/selectTab";

const { t } = vscode.l10n;

const createPanel = async () => {
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
      const panelName = await vscode.window.showInputBox({
        prompt: t("📦 Enter the name of the panel"),
      });

      if (panelName) {
        const panelPath = path.join(
          selectedTabPath as string,
          `${panelName}.panel`
        );
        const buttonPath = path.join(panelPath, "Hello World.pushbutton");

        createDirectory(panelPath);
        createDirectory(buttonPath);

        const scriptPath = path.join(buttonPath, "script.py");
        createFileWithContent(scriptPath, defaultPyRevitScript("Hello World"));

        const iconPath = path.join(buttonPath, "icon.png");
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
          "pyRevitLogo",
          "pyRevitLogo_black.png"
        );
        copyFile(defaultIconPath, iconPath);

        // const darkIconPath = path.join(buttonPath, "icon.dark.png");
        // const defaultDarkIconPath = path.join(
        //   __dirname,
        //   "..",
        //   "..",
        //   "..",
        //   "..",
        //   "src",
        //   "lib",
        //   "assets",
        //   "img",
        // "pyRevitLogo",
        //   "pyRevitLogo_white.png"
        // );
        // copyFile(defaultDarkIconPath, darkIconPath);

        showInformationMessage("Panel created successfully");
      }
    }
  }
};

export default createPanel;
