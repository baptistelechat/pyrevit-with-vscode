import * as path from "path";
import * as vscode from "vscode";

const { t } = vscode.l10n;

const selectTab = async (
  tabDirectories: string[]
): Promise<string | undefined> => {
  const selectedTab = await vscode.window.showQuickPick(
    [...tabDirectories.map((dir) => path.basename(dir, ".tab")), "+ New Value"],
    {
      placeHolder: t("📁 Select a tab"),
    }
  );

  return selectedTab;
};

export default selectTab;
