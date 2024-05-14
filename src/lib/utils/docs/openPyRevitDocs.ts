import * as vscode from "vscode";
import getWebviewContent from "../getWebviewContent";

const openPyRevitDocs = (context: vscode.ExtensionContext) => {
  // Create and show a new webview
  const panel = vscode.window.createWebviewPanel(
    "pyRevitDocs", // Identifies the type of the webview. Used internally
    "pyRevit Docs", // Title of the panel displayed to the user
    vscode.ViewColumn.Two, // Editor column to show the new webview panel in.
    {
      enableScripts: true, // Allow scripts in the webview
      retainContextWhenHidden: true, // Preserve the state of the webview when it's hidden
      localResourceRoots: [vscode.Uri.file(context.extensionPath)], // Allow the webview to access local resources from the extension
    } // Webview options. More on these later.
  );

  panel.webview.html = getWebviewContent(
    "https://v2-embednotion.com/bd907d6292ed4ce997c46e84b6ef67a0"
  );
};

export default openPyRevitDocs;
