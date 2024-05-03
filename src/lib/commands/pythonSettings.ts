import * as os from "os";
import * as path from "path";
import * as vscode from "vscode";

const pythonSettings = vscode.commands.registerCommand(
  "pyrevit-with-vscode.pythonSettings",
  async () => {
    // Check "python.analysis.extraPaths" in setting.json
    const config = vscode.workspace.getConfiguration("python");
    const revitApiStubsPathBase = path.join(
      os.homedir(),
      "AppData",
      "Roaming",
      "RevitAPI stubs"
    );
    const pyRevitLibPath = path.join(
      os.homedir(),
      "AppData",
      "Roaming",
      "pyRevit-Master",
      "pyrevitlib"
    );

    const revitApiStubsVersions = await vscode.workspace.fs.readDirectory(
      vscode.Uri.file(revitApiStubsPathBase)
    );
    const revitApiStubsVersionNames = revitApiStubsVersions
      .map((version) => version[0])
      .filter((name) => name.startsWith("RVT "));

    const extraPaths = config.get<string[]>("analysis.extraPaths") || [];

    const items = revitApiStubsVersionNames.map((name) => {
      const label = name.replace("RVT ", "Revit ");
      const picked = extraPaths.includes(
        path.join(revitApiStubsPathBase, name)
      );
      return { label, picked };
    });

    const selectedVersions = await vscode.window.showQuickPick(items, {
      canPickMany: true,
      placeHolder: vscode.l10n.t("Select the Revit API Stubs versions"),
    });

    if (selectedVersions) {
      const newExtraPaths = [];
      selectedVersions.forEach((item) => {
        const version = item.label.replace("Revit ", "RVT ");
        const revitApiStubsPath = path.join(revitApiStubsPathBase, version);
        newExtraPaths.push(revitApiStubsPath);
      });

      newExtraPaths.push(pyRevitLibPath);

      config.update(
        "analysis.extraPaths",
        newExtraPaths,
        vscode.ConfigurationTarget.Global
      );

      vscode.window.showInformationMessage(
        vscode.l10n.t(
          '"python.analysis.extraPaths" setting has been updated in settings.json.'
        )
      );
    } else {
      vscode.window.showErrorMessage(
        vscode.l10n.t("Revit API Stubs versions selection aborted")
      );
    }
  }
);

export default pythonSettings;
