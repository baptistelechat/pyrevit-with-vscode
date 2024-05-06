import * as vscode from "vscode";
import checkOs from "../utils/checkOs";
import createExtension from "../utils/components/createExtension";
import createPushButton from "../utils/components/createPushButton";

const components = vscode.commands.registerCommand(
  "pyrevit-with-vscode.components",
  async () => {
    const windowsOs = checkOs();
    if (windowsOs) {
      const options = ["💼 Extension", "✨ PushButton"];

      const selectedOption = await vscode.window.showQuickPick(options, {
        placeHolder: vscode.l10n.t("🐍 Select a component to create"),
      });

      if (selectedOption) {
        switch (selectedOption) {
          case "💼 Extension":
            createExtension();
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
