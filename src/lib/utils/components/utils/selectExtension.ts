import * as path from "path";
import * as vscode from "vscode";

const selectExtension = async (
  extensionDirectories: string[]
): Promise<string | undefined> => {
  const selectedExtension = await vscode.window.showQuickPick(
    extensionDirectories.map((dir) => path.basename(dir, ".extension")),
    {
      placeHolder: vscode.l10n.t("💼 Select an extension"),
    }
  );

  return selectedExtension;
};

export default selectExtension;
