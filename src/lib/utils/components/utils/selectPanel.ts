import * as path from "path";
import * as vscode from "vscode";

const selectPanel = async (
  panelDirectories: string[]
): Promise<string | undefined> => {
  const selectedPanel = await vscode.window.showQuickPick(
    panelDirectories.map((dir) => path.basename(dir, ".panel")),
    {
      placeHolder: vscode.l10n.t("📦 Select a panel"),
    }
  );

  return selectedPanel;
};

export default selectPanel;
