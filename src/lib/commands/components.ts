import * as vscode from "vscode";
import checkOs from "../utils/checkOs";
import createExtension from "../utils/components/createExtension";

const components = vscode.commands.registerCommand(
  "pyrevit-with-vscode.components",
  async () => {
    const windowsOs = checkOs();
    if (windowsOs) {
      const options = ["📁 Extension"];

      const selectedOption = await vscode.window.showQuickPick(options, {
        placeHolder: vscode.l10n.t("🐍 Select a component to create"),
      });

      if (selectedOption) {
        switch (selectedOption) {
          case "📁 Extension":
            createExtension();
            break;
        }
      }
    }
  }
);

export default components;
