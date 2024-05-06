import * as fs from "fs";
import * as path from "path";
import * as vscode from "vscode";

async function createExtension() {
  const extensionName = await vscode.window.showInputBox({
    prompt: vscode.l10n.t("📝 Enter the name of the extension"),
  });

  if (extensionName) {
    const tabName = await vscode.window.showInputBox({
      prompt: vscode.l10n.t("📝 Enter the name of the tab"),
    });

    if (tabName) {
      const panelName = await vscode.window.showInputBox({
        prompt: vscode.l10n.t("📝 Enter the name of the panel"),
      });

      if (panelName) {
        const buttonName = await vscode.window.showInputBox({
          prompt: vscode.l10n.t("📝 Enter the name of the button"),
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

            if (!fs.existsSync(extensionPath)) {
              fs.mkdirSync(extensionPath);
            }

            if (!fs.existsSync(tabPath)) {
              fs.mkdirSync(tabPath);
            }

            if (!fs.existsSync(panelPath)) {
              fs.mkdirSync(panelPath);
            }

            if (!fs.existsSync(buttonPath)) {
              fs.mkdirSync(buttonPath);
            }

            const scriptPath = path.join(buttonPath, "script.py");
            const iconPath = path.join(buttonPath, "icon.png");

            const scriptContent = `# -*- coding: utf-8 -*-
__title__ = "${buttonName}"
__author__ = "John Doe"
__doc__ = """This is ${buttonName} Button.
Click on it see what happens..."""

if __name__ == '__main__':
    print("${buttonName} clicked!")

# --------------------------------------------------
# 💡 pyRevit with VSCode: Use pyrvt ou pyrvtmin snippet`;

            fs.writeFileSync(scriptPath, scriptContent);

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
              vscode.l10n.t("Extension created successfully")
            );
          }
        }
      }
    }
  }
}

export default createExtension;