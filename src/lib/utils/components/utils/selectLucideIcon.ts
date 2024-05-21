import * as fs from "fs";
import * as path from "path";
import * as vscode from "vscode";

const selectLucideIcon = async (): Promise<string | undefined> => {
  const lucideIconsPath = path.join(__dirname, "../../../assets/img/lucide");

  const lucideIconsUri = vscode.Uri.file(lucideIconsPath);

  const files = fs.readdirSync(lucideIconsUri.fsPath);

  const iconNames: string[] = [];

  files.forEach((file) => {
    if (path.extname(file) === ".svg") {
      const iconName = path.basename(file, ".svg");
      iconNames.push(iconName);
    }
  });

  return new Promise((resolve, reject) => {
    vscode.window
      .showQuickPick(iconNames, {
        placeHolder: "🎨 Sélectionnez une icône Lucide",
      })
      .then((selectedIcon) => {
        if (selectedIcon) {
          const svgFileName = selectedIcon + ".svg";
          const svgPath = path.join(lucideIconsPath, svgFileName);
          resolve(svgPath);
        } else {
          resolve(undefined);
        }
      });
  });
};

export default selectLucideIcon;
