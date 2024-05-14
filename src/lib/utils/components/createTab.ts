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

const { t } = vscode.l10n;

const createTab = async () => {
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
    const tabName = await vscode.window.showInputBox({
      prompt: t("📁 Enter the name of the tab"),
    });

    if (tabName) {
      const tabPath = path.join(selectedExtensionPath, `${tabName}.tab`);
      const panelPath = path.join(tabPath, "New Panel.panel");
      const buttonPath = path.join(panelPath, "Hello World.pushbutton");

      createDirectory(tabPath);
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

      showInformationMessage("Tab created successfully");
    }
  }
};

export default createTab;
