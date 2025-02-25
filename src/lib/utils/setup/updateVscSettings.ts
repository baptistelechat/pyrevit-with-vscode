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
  const analysisExtraPaths = new Set(
    config.get<string[]>("python.analysis.extraPaths") || []
  );
  const autoCompleteExtraPaths = new Set(
    config.get<string[]>("python.autoComplete.extraPaths") || []
  );

  const revitApiStubsVersions = await vscode.workspace.fs.readDirectory(
    vscode.Uri.file(revitApiStubsPath)
  );
  const revitApiStubsVersionNames = revitApiStubsVersions
    .map((version) => version[0])
    .filter((name) => name.startsWith("RVT "));

  const items = revitApiStubsVersionNames.map((name) => {
    const label = name.replace("RVT ", "Revit ");
    const picked = analysisExtraPaths.has(path.join(revitApiStubsPath, name));
    return { label, picked };
  });

  const selectedVersions = await vscode.window.showQuickPick(items, {
    canPickMany: true,
    placeHolder: t("Select the Revit API versions"),
  });

  if (selectedVersions) {
    const selectedVersionPaths = new Set(
      selectedVersions.map((item) =>
        path.join(revitApiStubsPath, item.label.replace("Revit ", "RVT "))
      )
    );

    // Remove unselected versions
    analysisExtraPaths.forEach((p) => {
      if (
        revitApiStubsVersionNames.some((name) => p.includes(name)) &&
        !selectedVersionPaths.has(p)
      ) {
        analysisExtraPaths.delete(p);
      }
    });

    autoCompleteExtraPaths.forEach((p) => {
      if (
        revitApiStubsVersionNames.some((name) => p.includes(name)) &&
        !selectedVersionPaths.has(p)
      ) {
        autoCompleteExtraPaths.delete(p);
      }
    });

    // Add selected versions
    selectedVersionPaths.forEach((p) => {
      analysisExtraPaths.add(p);
      autoCompleteExtraPaths.add(p);
    });

    analysisExtraPaths.add(appdataPyRevitMasterPath);
    analysisExtraPaths.add(programFilesPyRevitMasterPath);
    analysisExtraPaths.add(ironPythonStubsPath);

    autoCompleteExtraPaths.add(appdataPyRevitMasterPath);
    autoCompleteExtraPaths.add(programFilesPyRevitMasterPath);
    autoCompleteExtraPaths.add(ironPythonStubsPath);

    config.update(
      "python.analysis.extraPaths",
      Array.from(analysisExtraPaths),
      vscode.ConfigurationTarget.Global
    );
    config.update(
      "python.autoComplete.extraPaths",
      Array.from(autoCompleteExtraPaths),
      vscode.ConfigurationTarget.Global
    );

    showInformationMessage('"settings.json" has been updated.');
  } else {
    showErrorMessage("Revit API versions selection aborted");
  }
};

export default updateVscSettings;
