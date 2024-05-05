import * as vscode from "vscode";
import checkOs from "../utils/checkOs";
import checkPyRevitLib from "../utils/checkPyRevitLib";
import checkPythonExtension from "../utils/checkPythonExtension";
import checkRevitApiStubs from "../utils/checkRevitApiStubs";
import updateVscSettings from "../utils/updateVscSettings";

const setup = vscode.commands.registerCommand(
  "pyrevit-with-vscode.setup",
  async () => {
    const windowsOs = checkOs();
    if (windowsOs) {
      const options = [
        vscode.l10n.t("🧩 Install Python extension"),
        vscode.l10n.t("📕 Install Revit API Stubs"),
        vscode.l10n.t("📕 Install pyRevit"),
        vscode.l10n.t('📝 Update "settings.json"'),
      ];

      const selectedOption = await vscode.window.showQuickPick(options, {
        placeHolder: vscode.l10n.t("🛠️ Select a setup option"),
      });

      if (selectedOption) {
        switch (selectedOption) {
          case vscode.l10n.t("🧩 Install Python extension"):
            checkPythonExtension();
            break;
          case vscode.l10n.t("📕 Install Revit API Stubs"):
            checkRevitApiStubs();
            break;
          case vscode.l10n.t("📕 Install pyRevit"):
            checkPyRevitLib();
            break;
          case vscode.l10n.t('📝 Update "settings.json"'):
            updateVscSettings();
            break;
        }
      }
    }
  }
);

export default setup;
