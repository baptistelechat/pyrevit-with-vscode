import * as path from "path";
import * as vscode from "vscode";
import { ironPythonStubsPath } from "../../constants/ironPythonStubsPath";
import {
  appdataPyRevitMasterPath,
  programFilesPyRevitMasterPath,
} from "../../constants/pyRevitPaths";
import revitApiStubsPath from "../../constants/revitApiStubsPath";
import { showErrorMessage, showInformationMessage } from "../showMessage";

const { t } = vscode.l10n;

const updateVscSettings = async () => {
  // Check "python.autoComplete.extraPaths" in setting.json
  const config = vscode.workspace.getConfiguration();
  const analysisExtraPaths =
    config.get<string[]>("python.analysis.extraPaths") || [];

  const revitApiStubsVersions = await vscode.workspace.fs.readDirectory(
    vscode.Uri.file(revitApiStubsPath)
  );
  const revitApiStubsVersionNames = revitApiStubsVersions
    .map((version) => version[0])
    .filter((name) => name.startsWith("RVT "));

  const items = revitApiStubsVersionNames.map((name) => {
    const label = name.replace("RVT ", "Revit ");
    const picked = analysisExtraPaths.includes(
      path.join(revitApiStubsPath, name)
    );
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

    newExtraPaths.push(appdataPyRevitMasterPath);
    newExtraPaths.push(programFilesPyRevitMasterPath);
    newExtraPaths.push(ironPythonStubsPath);

    config.update(
      "python.analysis.extraPaths",
      newExtraPaths,
      vscode.ConfigurationTarget.Global
    );
    config.update(
      "python.autoComplete.extraPaths",
      newExtraPaths,
      vscode.ConfigurationTarget.Global
    );

    showInformationMessage('"settings.json" has been updated.');
  } else {
    showErrorMessage("Revit API versions selection aborted");
  }
};

export default updateVscSettings;
