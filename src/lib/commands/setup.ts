import * as vscode from "vscode";
import checkOs from "../utils/checkOs";
import checkPyRevitLib from "../utils/setup/checkPyRevitLib";
import checkPythonExtension from "../utils/setup/checkPythonExtension";
import checkPythonInstallation from "../utils/setup/checkPythonInstallation";
import checkRevitApiStubs from "../utils/setup/checkRevitApiStubs";
import updateVscSettings from "../utils/setup/updateVscSettings";
import { updateRevitApiStubs } from "../utils/setup/updateRevitApiStubs";

const { t } = vscode.l10n;

const setup = vscode.commands.registerCommand(
  "pyrevit-with-vscode.setup",
  async () => {
    const windowsOs = checkOs();
    if (windowsOs) {
      const options = [
        t("🐍 Install Python"),
        t("🧩 Install Python extension"),
        t("📕 Install Revit API Stubs"),
        t("📕 Install pyRevit"),
        t("✨ Update Revit API Stubs"),
        t('📝 Update "settings.json"'),
      ];

      const selectedOption = await vscode.window.showQuickPick(options, {
        placeHolder: t("🛠️ Select a setup option"),
      });

      if (selectedOption) {
        switch (selectedOption) {
          case t("🐍 Install Python"):
            checkPythonInstallation();
            break;
          case t("🧩 Install Python extension"):
            checkPythonExtension();
            break;
          case t("📕 Install Revit API Stubs"):
            checkRevitApiStubs();
            break;
          case t("📕 Install pyRevit"):
            checkPyRevitLib();
            break;
          case t("✨ Update Revit API Stubs"):
            updateRevitApiStubs();
            updateVscSettings();
            break;
          case t('📝 Update "settings.json"'):
            updateVscSettings();
            break;
        }
      }
    }
  }
);

export default setup;
