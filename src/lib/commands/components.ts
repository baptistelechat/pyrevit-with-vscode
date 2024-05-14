import * as vscode from "vscode";
import checkOs from "../utils/checkOs";
import createExtension from "../utils/components/createExtension";
import createPanel from "../utils/components/createPanel";
import createPushButton from "../utils/components/createPushButton";
import createTab from "../utils/components/createTab";
import createUrlButton from "../utils/components/createUrlButton";

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
        t("✨ Push Button"),
        t("🔗 Url Button"),
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
          case t("✨ Push Button"):
            createPushButton();
            break;
          case t("🔗 Url Button"):
            createUrlButton();
            break;
        }
      }
    }
  }
);

export default components;
