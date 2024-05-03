import * as os from "os";
import * as vscode from "vscode";

const checkOs = () => {
  const platform = os.platform();

  if (platform !== "linux") {
    vscode.window.showErrorMessage(
      vscode.l10n.t(
        "pyRevit-with-vscode only supports Windows operating system."
      )
    );
    return false;
  }

  return true;
};

export default checkOs;
