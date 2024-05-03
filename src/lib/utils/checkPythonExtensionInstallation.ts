import * as vscode from "vscode";

const locale = vscode.env.language;

const { t } = vscode.l10n;

const checkPythonExtensionInstallation = () => {
  // Vérifier si l'extension Python est installée
  const pythonExtensionId = "ms-python.python";
  const pythonExtension = vscode.extensions.getExtension(pythonExtensionId);

  if (!pythonExtension) {
    vscode.window
      .showErrorMessage(
        t("pyrevit-with-vscode.showInstallMessage.errorMessage"),
        t("pyrevit-with-vscode.install"),
        t("pyrevit-with-vscode.activate")
      )
      .then((action) => {
        if (action === t("pyrevit-with-vscode.install")) {
          vscode.commands.executeCommand(
            "workbench.extensions.search",
            pythonExtensionId
          );
          vscode.commands.executeCommand(
            "workbench.extensions.installExtension",
            pythonExtensionId
          );
        }
        if (action === t("pyrevit-with-vscode.activate")) {
          vscode.commands.executeCommand(
            "workbench.extensions.search",
            pythonExtensionId
          );
        }
      });
    return;
  }

  // Si l'extension Python est installée et activée, poursuivre l'activation de votre extension
  vscode.window.showInformationMessage(
    t("pyrevit-with-vscode.showInstallMessage.successMessage")
  );
};

export default checkPythonExtensionInstallation;
