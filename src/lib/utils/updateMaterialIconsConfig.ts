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

  // 🔍 Récupérer la configuration actuelle des customClones
  const currentCustomClones: any[] =
    config.get("material-icon-theme.folders.customClones") || [];

  // 🔍 Récupération des dossiers du projet
  const projectDirs = getProjectStructure(workspacePath);

  // 🎨 Définition des styles
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

  // 📌 Regrouper les dossiers par type
  const groupedFolders: Record<string, string[]> = {};

  projectDirs.forEach((dir) => {
    const match = dir.match(
      /\.?(extension|tab|panel|stack|pulldown|pushbutton|urlbutton)$/
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

  const newCustomClones = Object.entries(groupedFolders).map(
    ([type, folders]) => {
      const style = folderStyles[type];
      const folderType = `${type[0].toUpperCase()}${type.slice(1)}`;

      console.log(
        `${style.emoji} ${folderType}: ${folders.length} dossiers détectés.`
      );

      // 🛠️ Vérifier si un style existe déjà pour éviter d'écraser la couleur
      const existingClone = currentCustomClones.find((clone) =>
        clone.folderNames.some((name: string) => folders.includes(name))
      );

      return {
        name: `pyRevit ${folderType}`,
        base: style.base,
        color: existingClone ? existingClone.color : style.color,
        folderNames: folders,
      };
    }
  );

  if (newCustomClones.length === 0) {
    vscode.window.showErrorMessage("Aucun dossier valide trouvé.");
    return;
  }

  // 📌 Fusionner les anciennes et nouvelles configurations sans doublons
  const mergedCustomClones = [...currentCustomClones];

  newCustomClones.forEach((newClone) => {
    const existingIndex = mergedCustomClones.findIndex(
      (clone) => clone.name === newClone.name
    );

    if (existingIndex !== -1) {
      // Mise à jour des dossiers sans écraser la couleur
      mergedCustomClones[existingIndex].folderNames = [
        ...new Set([
          ...mergedCustomClones[existingIndex].folderNames,
          ...newClone.folderNames,
        ]),
      ];
    } else {
      mergedCustomClones.push(newClone);
    }
  });

  // 📌 Mettre à jour la configuration VS Code
  await config.update(
    "material-icon-theme.folders.customClones",
    mergedCustomClones,
    vscode.ConfigurationTarget.Global
  );

  // vscode.window.showInformationMessage(
  //   "Material Icon Theme updated successfully! 🎨"
  // );
};

export default updateMaterialIconsConfig;
