import * as path from "path";
import * as vscode from "vscode";

const { t } = vscode.l10n;

const selectExtension = async (
  extensionDirectories: string[]
): Promise<string | undefined> => {
  const selectedExtension = await vscode.window.showQuickPick(
    [
      ...extensionDirectories.map((dir) => path.basename(dir, ".extension")),
      "+ New Value",
    ],
    {
      placeHolder: t("💼 Select an extension"),
    }
  );

  return selectedExtension;
};

export default selectExtension;
