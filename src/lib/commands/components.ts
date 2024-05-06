import * as vscode from "vscode";
import checkOs from "../utils/checkOs";
import createExtension from "../utils/components/createExtension";
import createPanel from "../utils/components/createPanel";
import createPushButton from "../utils/components/createPushButton";
import createTab from "../utils/components/createTab";

const components = vscode.commands.registerCommand(
  "pyrevit-with-vscode.components",
  async () => {
    const windowsOs = checkOs();
    if (windowsOs) {
      const options = [
        "💼 Extension",
        vscode.l10n.t("📁 Tab"),
        vscode.l10n.t("📦 Panel"),
        "✨ PushButton",
      ];

      const selectedOption = await vscode.window.showQuickPick(options, {
        placeHolder: vscode.l10n.t("🐍 Select a component to create"),
      });

      if (selectedOption) {
        switch (selectedOption) {
          case "💼 Extension":
            createExtension();
            break;
          case vscode.l10n.t("📁 Tab"):
            createTab();
            break;
          case vscode.l10n.t("📦 Panel"):
            createPanel();
            break;
          case "✨ PushButton":
            createPushButton();
            break;
        }
      }
    }
  }
);

export default components;
