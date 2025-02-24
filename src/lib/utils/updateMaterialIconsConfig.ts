import * as fs from "fs";
import * as path from "path";
import * as vscode from "vscode";
import { materialPalette } from "../constants/materialPalette";

const getProjectStructure = (source: string): string[] => {
  const directories: string[] = [];

  const scanDir = (dir: string) => {
    const files = fs.readdirSync(dir, { withFileTypes: true });
    for (const file of files) {
      if (file.isDirectory()) {
        const fullPath = path.join(dir, file.name);
        directories.push(fullPath);
        scanDir(fullPath);
      }
    }
  };

  scanDir(source);
  return directories;
};

const updateMaterialIconsConfig = async () => {
  const materialIconThemeExtensionId = "pkief.material-icon-theme";
  const materialIconThemeExtension = vscode.extensions.getExtension(
    materialIconThemeExtensionId
  );

  if (!materialIconThemeExtension) {
    return;
  }

  const workspacePath = vscode.workspace.workspaceFolders?.[0]?.uri.fsPath;
  if (!workspacePath) {
    vscode.window.showErrorMessage("No workspace folder found.");
    return;
  }

  const config = vscode.workspace.getConfiguration();

  // 🔍 Retrieve the current customClones configuration
  const currentCustomClones: any[] =
    config.get("material-icon-theme.folders.customClones") || [];

  // 🔍 Retrieve project folders
  const projectDirs = getProjectStructure(workspacePath);

  // 🎨 Define styles
  const folderStyles: Record<
    string,
    { base: string; color: string; emoji: string }
  > = {
    extension: {
      base: "project",
      color: materialPalette["blue-500"],
      emoji: "💼",
    },
    tab: { base: "ui", color: materialPalette["red-500"], emoji: "📁" },
    panel: { base: "app", color: materialPalette["green-500"], emoji: "📦" },
    stack: {
      base: "components",
      color: materialPalette["cyan-700"],
      emoji: "🗃️",
    },
    splitpushbutton: {
      base: "plugin",
      color: materialPalette["pink-300"],
      emoji: "📂",
    },
    pulldown: {
      base: "element",
      color: materialPalette["brown-500"],
      emoji: "⬇️",
    },
    pushbutton: {
      base: "plugin",
      color: materialPalette["amber-600"],
      emoji: "✨",
    },
    urlbutton: {
      base: "plugin",
      color: materialPalette["purple-400"],
      emoji: "🔗",
    },
  };

  // 📌 Retrieve existing colors
  const existingColors: Record<string, string> = {};
  currentCustomClones.forEach((clone) => {
    const type = clone.name.replace(/^pyRevit\s/, "").toLowerCase();
    if (folderStyles[type]) {
      existingColors[type] = clone.color;
    }
  });

  // 📌 Group folders by type
  const groupedFolders: Record<string, string[]> = {};

  projectDirs.forEach((dir) => {
    const match = dir.match(
      /.?(extension|tab|panel|stack|splitpushbutton|pulldown|pushbutton|urlbutton)$/
    );
    if (!match) {
      return;
    }

    const type = match[1];
    if (!groupedFolders[type]) {
      groupedFolders[type] = [];
    }
    groupedFolders[type].push(path.basename(dir));
  });

  // 🆕 Create the new configuration
  const newCustomClones = Object.entries(groupedFolders).map(
    ([type, folders]) => {
      const style = folderStyles[type];
      const folderType = `${type[0].toUpperCase()}${type.slice(1)}`;

      console.log(
        `${style.emoji} ${folderType}: ${folders.length} folders detected.`
      );

      return {
        name: `pyRevit ${folderType}`,
        base: style.base,
        color: existingColors[type] || style.color, // 🔥 Retains existing color if defined
        folderNames: folders,
      };
    }
  );

  if (newCustomClones.length === 0) {
    vscode.window.showErrorMessage("No valid folders found.");
    return;
  }

  // 📌 Update VS Code configuration
  await config.update(
    "material-icon-theme.folders.customClones",
    newCustomClones,
    vscode.ConfigurationTarget.Global
  );

  // vscode.window.showInformationMessage(
  //   "Material Icon Theme successfully updated! 🎨"
  // );
};

export default updateMaterialIconsConfig;
