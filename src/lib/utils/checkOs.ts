import * as os from "os";
import * as vscode from "vscode";

const checkOs = () => {
  // Check the user's operating system and display an error message if it's not a win32 user
  const platform = os.platform();

  if (platform !== "win32") {
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
