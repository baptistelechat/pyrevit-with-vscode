import * as vscode from "vscode";
import getWebviewContent from "../getWebviewContent";

const openRevitApiDocs = (context: vscode.ExtensionContext) => {
  // Create and show a new webview
  const panel = vscode.window.createWebviewPanel(
    "revitApiDocs", // Identifies the type of the webview. Used internally
    "Revit API Docs", // Title of the panel displayed to the user
    vscode.ViewColumn.Two, // Editor column to show the new webview panel in.
    {
      enableScripts: true, // Allow scripts in the webview
      retainContextWhenHidden: true, // Preserve the state of the webview when it's hidden
      localResourceRoots: [vscode.Uri.file(context.extensionPath)], // Allow the webview to access local resources from the extension
    } // Webview options. More on these later.
  );

  panel.webview.html = getWebviewContent("https://www.revitapidocs.com");
};

export default openRevitApiDocs;
