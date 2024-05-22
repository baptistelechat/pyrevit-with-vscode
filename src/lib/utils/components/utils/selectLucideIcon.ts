import * as fs from "fs";
import * as path from "path";
import * as vscode from "vscode";

const selectLucideIcon = async (): Promise<string | undefined> => {
  const lucideIconsPath = path.join(
    __dirname,
    "../../../../../src/lib/assets/img/lucide"
  );

  const lucideIconsUri = vscode.Uri.file(lucideIconsPath);

  const files = fs.readdirSync(lucideIconsUri.fsPath);

  const items: vscode.QuickPickItem[] = [];

  files.forEach((file) => {
    if (path.extname(file) === ".svg") {
      const iconName = path.basename(file, ".svg");
      const iconPath = path.join(lucideIconsPath, file);
      const iconSvg = fs.readFileSync(iconPath, "utf8");
      const whiteIconSvg = iconSvg.replace(
        'stroke="currentColor"',
        'stroke="white"'
      );
      const buffer = Buffer.from(whiteIconSvg, "utf8");
      const encodedWhiteIconSvg = buffer.toString("base64");
      const item: vscode.QuickPickItem = {
        label: iconName,
        iconPath: {
          light: vscode.Uri.file(iconPath),
          dark: vscode.Uri.parse(
            `data:image/svg+xml;base64,${encodedWhiteIconSvg}`
          ),
        },
      };
      items.push(item);
    }
  });

  return new Promise((resolve, reject) => {
    vscode.window
      .showQuickPick(items, {
        placeHolder: "🎨 Sélectionnez une icône Lucide",
      })
      .then((selectedIcon) => {
        if (selectedIcon) {
          const svgFileName = selectedIcon.label + ".svg";
          const svgPath = path.join(lucideIconsPath, svgFileName);
          resolve(svgPath);
        } else {
          resolve(undefined);
        }
      });
  });
};

export default selectLucideIcon;
