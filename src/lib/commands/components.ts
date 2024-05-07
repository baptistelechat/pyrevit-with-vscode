import * as vscode from "vscode";
import checkOs from "../utils/checkOs";
import createExtension from "../utils/components/createExtension";
import createPanel from "../utils/components/createPanel";
import createPushButton from "../utils/components/createPushButton";
import createTab from "../utils/components/createTab";

const { t } = vscode.l10n;

const components = vscode.commands.registerCommand(
  "pyrevit-with-vscode.components",
  async () => {
    const windowsOs = checkOs();
    if (windowsOs) {
      const options = [
        "💼 Extension",
        t("📁 Tab"),
        t("📦 Panel"),
        "✨ PushButton",
      ];

      const selectedOption = await vscode.window.showQuickPick(options, {
        placeHolder: t("🐍 Select a component to create"),
      });

      if (selectedOption) {
        switch (selectedOption) {
          case "💼 Extension":
            createExtension();
            break;
          case t("📁 Tab"):
            createTab();
            break;
          case t("📦 Panel"):
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
