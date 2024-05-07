import * as path from "path";
import * as vscode from "vscode";
import pyRevitMasterPath from "../../constants/pyRevitMasterPath";
import revitApiStubsPath from "../../constants/revitApiStubsPath";

const { t } = vscode.l10n;

const updateVscSettings = async () => {
  // Check "python.autoComplete.extraPaths" in setting.json
  const config = vscode.workspace.getConfiguration("python");
  const extraPaths = config.get<string[]>("autoComplete.extraPaths") || [];

  const revitApiStubsVersions = await vscode.workspace.fs.readDirectory(
    vscode.Uri.file(revitApiStubsPath)
  );
  const revitApiStubsVersionNames = revitApiStubsVersions
    .map((version) => version[0])
    .filter((name) => name.startsWith("RVT "));

  const items = revitApiStubsVersionNames.map((name) => {
    const label = name.replace("RVT ", "Revit ");
    const picked = extraPaths.includes(path.join(revitApiStubsPath, name));
    return { label, picked };
  });

  const selectedVersions = await vscode.window.showQuickPick(items, {
    canPickMany: true,
    placeHolder: t("Select the Revit API versions"),
  });

  if (selectedVersions) {
    const newExtraPaths = [];
    selectedVersions.forEach((item) => {
      const version = item.label.replace("Revit ", "RVT ");
      const revitApiStubsVersionPath = path.join(revitApiStubsPath, version);
      newExtraPaths.push(revitApiStubsVersionPath);
    });

    newExtraPaths.push(pyRevitMasterPath);

    config.update(
      "autoComplete.extraPaths",
      newExtraPaths,
      vscode.ConfigurationTarget.Global
    );

    vscode.window.showInformationMessage(
      t('"settings.json" has been updated.')
    );
  } else {
    vscode.window.showErrorMessage(t("Revit API versions selection aborted"));
  }
};

export default updateVscSettings;
