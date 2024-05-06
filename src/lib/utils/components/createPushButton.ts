import * as fs from "fs";
import * as path from "path";
import * as vscode from "vscode";

function getDirectories(srcpath: string) {
  return fs
    .readdirSync(srcpath)
    .filter((file) => fs.statSync(path.join(srcpath, file)).isDirectory())
    .map((file) => path.join(srcpath, file));
}

async function createPushButton() {
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

  const selectedExtension = await vscode.window.showQuickPick(
    extensionDirectories.map((dir) => path.basename(dir, ".extension")),
    {
      placeHolder: vscode.l10n.t("💼 Select an extension"),
    }
  );

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

    const selectedTab = await vscode.window.showQuickPick(
      tabDirectories.map((dir) => path.basename(dir, ".tab")),
      {
        placeHolder: vscode.l10n.t("📁 Select a tab"),
      }
    );

    if (!selectedTab) {
      vscode.window.showInformationMessage(vscode.l10n.t("No tab selected."));
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
        vscode.window.showErrorMessage(vscode.l10n.t("No panel found."));
        return;
      }

      const selectedPanel = await vscode.window.showQuickPick(
        panelDirectories.map((dir) => path.basename(dir, ".panel")),
        {
          placeHolder: vscode.l10n.t("📦 Select a panel"),
        }
      );

      if (!selectedPanel) {
        vscode.window.showInformationMessage(
          vscode.l10n.t("No panel selected.")
        );
        return;
      }

      const selectedPanelPath = panelDirectories.find(
        (dir) => path.basename(dir, ".panel") === selectedPanel
      );

      if (typeof selectedPanelPath === "string") {
        const buttonName = await vscode.window.showInputBox({
          prompt: vscode.l10n.t("📝 Enter the name of the button"),
        });

        if (buttonName) {
          const buttonPath = path.join(
            selectedPanelPath,
            `${buttonName}.pushbutton`
          );

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
            vscode.l10n.t("PushButton created successfully")
          );
        }
      }
    }
  }
}

export default createPushButton;
