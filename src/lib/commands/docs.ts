import * as vscode from "vscode";
import checkOs from "../utils/checkOs";
import openPyRevitDocs from "../utils/docs/openPyRevitDocs";
import openPyRevitEmojisList from "../utils/docs/openPyRevitEmojisList";
import openRevitApiDocs from "../utils/docs/openRevitApiDocs";

const { t } = vscode.l10n;

const docs = (context: vscode.ExtensionContext) =>
  vscode.commands.registerCommand("pyrevit-with-vscode.docs", async () => {
    const windowsOs = checkOs();
    if (windowsOs) {
      const options = ["📕 Revit API Docs", "📕 pyRevit", "🎨 pyRevit Emojis"];

      const selectedOption = await vscode.window.showQuickPick(options, {
        placeHolder: t("📚 Select a documentation"),
      });

      if (selectedOption) {
        switch (selectedOption) {
          case "📕 Revit API Docs":
            openRevitApiDocs(context);
            break;
          case "📕 pyRevit":
            openPyRevitDocs(context);
            break;
          case "🎨 pyRevit Emojis":
            openPyRevitEmojisList(context);
            break;
        }
      }
    }
  });

export default docs;
