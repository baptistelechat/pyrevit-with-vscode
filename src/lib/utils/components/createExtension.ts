import * as fs from "fs";
import * as path from "path";
import * as vscode from "vscode";
import createDirectory from "./utils/createDirectory";
import defaultPyRevitScript from "../../constants/defaultPyRevitScript";

const { t } = vscode.l10n;

async function createExtension() {
  const extensionName = await vscode.window.showInputBox({
    prompt: t("📝 Enter the name of the extension"),
  });

  if (extensionName) {
    const tabName = await vscode.window.showInputBox({
      prompt: t("📝 Enter the name of the tab"),
    });

    if (tabName) {
      const panelName = await vscode.window.showInputBox({
        prompt: t("📝 Enter the name of the panel"),
      });

      if (panelName) {
        const buttonName = await vscode.window.showInputBox({
          prompt: t("📝 Enter the name of the button"),
        });

        if (buttonName) {
          const workspaceUri = vscode.workspace.workspaceFolders?.[0]?.uri;
          const workspacePath = workspaceUri?.fsPath;
          if (workspacePath) {
            const extensionPath = path.join(
              workspacePath,
              `${extensionName}.extension`
            );
            const tabPath = path.join(extensionPath, `${tabName}.tab`);
            const panelPath = path.join(tabPath, `${panelName}.panel`);
            const buttonPath = path.join(panelPath, `${buttonName}.pushbutton`);

            createDirectory(extensionPath);
            createDirectory(tabPath);
            createDirectory(panelPath);
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
              t("Extension created successfully")
            );
          }
        }
      }
    }
  }
}

export default createExtension;
