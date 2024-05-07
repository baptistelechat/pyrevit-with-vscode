import * as path from "path";
import * as vscode from "vscode";

const { t } = vscode.l10n;

const selectPanel = async (
  panelDirectories: string[]
): Promise<string | undefined> => {
  const selectedPanel = await vscode.window.showQuickPick(
    [
      ...panelDirectories.map((dir) => path.basename(dir, ".panel")),
      "+ New Value",
    ],
    {
      placeHolder: t("📦 Select a panel"),
    }
  );

  return selectedPanel;
};

export default selectPanel;
