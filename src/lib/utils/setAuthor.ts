import * as vscode from "vscode";
import { showInformationMessage } from "./showMessage";

const { t } = vscode.l10n;

const setAuthor = () => {
  // Read "pyrevit-with-vscode.author" in setting.json
  const config = vscode.workspace.getConfiguration();
  const author = config.get<string>("pyrevit-with-vscode.author");
  if (author === "") {
    config.update(
      "pyrevit-with-vscode.author",
      "John Doe",
      vscode.ConfigurationTarget.Global
    );

    showInformationMessage(
      t(
        'The default author of pyRevit with VSCode is John Doe. To update it, go to the setting.json file and modify "pyrevit-with-vscode.author" key.'
      )
    );
  }
};

export default setAuthor;
