import * as vscode from "vscode";
import { showInformationMessage } from "../showMessage";

const { t } = vscode.l10n;

const checkMaterialIconThemeExtension = () => {
  // Check if the Icon pack extension is installed
  const materialIconThemeExtensionId = "pkief.material-icon-theme";
  const materialIconThemeExtension = vscode.extensions.getExtension(
    materialIconThemeExtensionId
  );

  if (!materialIconThemeExtension) {
    vscode.window
      .showErrorMessage(
        t(
          "Material Icon Theme is not installed. Some features of this extension may not work correctly. Do you want to install or enable it now?"
        ),
        t("Install"),
        t("Enable")
      )
      .then((action) => {
        if (action === t("Install")) {
          vscode.commands.executeCommand(
            "workbench.extensions.search",
            materialIconThemeExtensionId
          );
          vscode.commands
            .executeCommand(
              "workbench.extensions.installExtension",
              materialIconThemeExtensionId
            )
            .then(async () => {
              const config = vscode.workspace.getConfiguration();
              await config.update(
                "workbench.iconTheme",
                "material-icon-theme",
                vscode.ConfigurationTarget.Global
              );
            });
        }
        if (action === t("Enable")) {
          vscode.commands
            .executeCommand(
              "workbench.extensions.search",
              materialIconThemeExtensionId
            )
            .then(async () => {
              const config = vscode.workspace.getConfiguration();
              await config.update(
                "workbench.iconTheme",
                "material-icon-theme",
                vscode.ConfigurationTarget.Global
              );
            });
        }
      });
  } else {
    showInformationMessage(
      "Material Icon Theme is already installed and activated."
    );
  }
};

export default checkMaterialIconThemeExtension;
