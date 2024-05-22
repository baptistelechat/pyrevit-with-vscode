import * as fs from "fs";
import * as path from "path";
import tinycolor from "tinycolor2";
import * as vscode from "vscode";

const { t } = vscode.l10n;

const selectLucideIcon = async (): Promise<string | undefined> => {
  const colorInput = await vscode.window.showInputBox({
    ignoreFocusOut: true,
    prompt: t("🎨 Enter a color"),
    value: "#000000",
    validateInput: (value) => {
      try {
        tinycolor(value);
        return null;
      } catch (error) {
        return "Invalid color";
      }
    },
  });

  if (colorInput === undefined) {
    return undefined;
  }

  const color = tinycolor(colorInput).toHexString();

  const lucideIconsPath = path.join(
    __dirname,
    "../../../../../src/lib/assets/img/lucide"
  );

  const lucideIconsUri = vscode.Uri.file(lucideIconsPath);

  const files = fs.readdirSync(lucideIconsUri.fsPath);

  const items: vscode.QuickPickItem[] = [];

  files.forEach((file) => {
    if (path.extname(file) === ".svg") {
      const svgName = path.basename(file, ".svg");
      const svgPath = path.join(lucideIconsPath, file);
      const svgContent = fs.readFileSync(svgPath, "utf8");
      const colorIconSvg = svgContent.replace(
        'stroke="currentColor"',
        `stroke="${color}"`
      );
      const buffer = Buffer.from(colorIconSvg, "utf8");
      const encodedWhiteIconSvg = buffer.toString("base64");
      const item: vscode.QuickPickItem = {
        label: svgName,
        iconPath: vscode.Uri.parse(
          `data:image/svg+xml;base64,${encodedWhiteIconSvg}`
        ),
      };
      items.push(item);
    }
  });

  return new Promise((resolve, reject) => {
    vscode.window
      .showQuickPick(items, {
        placeHolder: t("⭕ Select a icon"),
      })
      .then((selectedIcon) => {
        if (selectedIcon) {
          const svgName = selectedIcon.label + ".svg";
          const svgPath = path.join(lucideIconsPath, svgName);
          const svgContent = fs.readFileSync(svgPath, "utf8");
          const colorIconSvg = svgContent.replace(
            'stroke="currentColor"',
            `stroke="${color}"`
          );
          const buffer = Buffer.from(colorIconSvg, "utf8");
          const encodedWhiteIconSvg = buffer.toString("base64");
          resolve(`data:image/svg+xml;base64,${encodedWhiteIconSvg}`);
        } else {
          resolve(undefined);
        }
      });
  });
};

export default selectLucideIcon;
