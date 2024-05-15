import * as vscode from "vscode";

const replaceAuthorInSnippets = vscode.workspace.onDidChangeTextDocument(
  (event) => {
    const document = event.document;
    const fullText = document.getText();

    // Vérifie si le document contient le texte '__AUTHOR__'
    if (fullText.includes("__AUTHOR__")) {
      // Récupère l'auteur depuis la configuration
      const config = vscode.workspace.getConfiguration();
      const author = config.get<string>("pyrevit-with-vscode.author");

      // Remplace '__AUTHOR__' par l'auteur dans le document
      const updatedText = fullText.replace(/__AUTHOR__/g, author || "");

      // Remplace le contenu du document par le texte mis à jour
      vscode.window.activeTextEditor?.edit((editBuilder) => {
        const startPosition = new vscode.Position(0, 0);
        const endPosition = new vscode.Position(
          document.lineCount - 1,
          document.lineAt(document.lineCount - 1).text.length
        );
        const fullRange = new vscode.Range(startPosition, endPosition);
        editBuilder.replace(fullRange, updatedText);
      });
    }
  }
);

export default replaceAuthorInSnippets;
