import * as vscode from "vscode";

const { t } = vscode.l10n;

const showErrorMessage = (message: string) => {
  vscode.window.showErrorMessage(t(message));
};

const showInformationMessage = (message: string) => {
  vscode.window.showInformationMessage(t(message));
};

export { showErrorMessage, showInformationMessage };
