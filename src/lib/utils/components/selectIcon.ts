import * as fs from "fs";
import * as path from "path";
import sharp from "sharp";
import * as vscode from "vscode";
import { showInformationMessage } from "../showMessage";
import convertSvgToPng from "./utils/convertSvgToPng";
import copyFile from "./utils/copyFile";

const { t } = vscode.l10n;

const selectIcon = async (
  iconPath: string,
  defaultIconPath: string,
  height: number,
  width: number
) => {
  const options = [
    t("🐍 Default icon"),
    t("💻 Load from my computer"),
    "🎨 Lucide Icons",
  ];

  const selectedOption = await vscode.window.showQuickPick(options, {
    placeHolder: t("🎨 Select a icon option"),
  });

  if (selectedOption) {
    switch (selectedOption) {
      case t("🐍 Default icon"):
        copyFile(defaultIconPath, iconPath);
        break;
      case t("💻 Load from my computer"):
        const svgPath = (
          (await vscode.window.showOpenDialog({
            canSelectMany: false,
            filters: {
              Images: ["svg", "png"],
            },
          })) as vscode.Uri[]
        )[0].fsPath;

        const extension = path.extname(svgPath).toLowerCase();

        if (extension === ".png") {
          const buffer = await fs.promises.readFile(svgPath);
          const resizedBuffer = await sharp(buffer)
            .resize(height, width)
            .toBuffer();
          await fs.promises.writeFile(iconPath, resizedBuffer);
        } else if (extension === ".svg") {
          await convertSvgToPng(svgPath, iconPath, height, width);
        }
        break;
      case "🎨 Lucide Icons":
        showInformationMessage("⌛ Coming soon, default icon added...");
        copyFile(defaultIconPath, iconPath);
        break;
    }
  }
};

export default selectIcon;
