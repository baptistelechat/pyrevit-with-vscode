import * as vscode from "vscode";
import checkOs from "../utils/checkOs";
import openPyRevitDocs from "../utils/docs/openPyRevitDocs";

const docs = (context: vscode.ExtensionContext) =>
  vscode.commands.registerCommand("pyrevit-with-vscode.docs", async () => {
    const windowsOs = checkOs();
    if (windowsOs) {
      const options = ["📕 Revit API Docs", "📕 pyRevit"];

      const selectedOption = await vscode.window.showQuickPick(options, {
        placeHolder: vscode.l10n.t("📚 Select a documentation"),
      });

      if (selectedOption) {
        switch (selectedOption) {
          case "📕 Revit API Docs":
            openPyRevitDocs(context);
            break;
          case "📕 pyRevit":
            openPyRevitDocs(context);
            break;
        }
      }
    }
  });

export default docs;
