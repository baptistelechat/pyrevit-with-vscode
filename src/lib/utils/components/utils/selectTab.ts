import * as path from "path";
import * as vscode from "vscode";

const selectTab = async (
  tabDirectories: string[]
): Promise<string | undefined> => {
  const selectedTab = await vscode.window.showQuickPick(
    tabDirectories.map((dir) => path.basename(dir, ".tab")),
    {
      placeHolder: vscode.l10n.t("📁 Select a tab"),
    }
  );

  return selectedTab;
};

export default selectTab;
