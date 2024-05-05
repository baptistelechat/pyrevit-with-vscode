import * as fs from "fs";
import path from "path";
import * as vscode from "vscode";
import IPyRevitEmoji from "../interface/IPyRevitEmoji";

const generatePyRevitEmojiListHTML = async (
  context: vscode.ExtensionContext,
  icons: IPyRevitEmoji[]
): Promise<string> => {
  const iconPath = path.join(
    context.extensionPath,
    "src",
    "lib",
    "assets",
    "img",
    "emojis"
  );

  let html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>pyRevit Emojis List</title>
  <style>
    table {
      width: 100%;
    }
    th, td {
      padding: 8px;
      text-align: left;
    }
    th {
      background-color: #333333;
    }
    tr:nth-child(even) {
      background-color: #333333;
    }
    tr:hover {
      background-color: #666666;
      color: #1a1a1a;
      cursor: pointer
    }
    .copied {
      background-color: #4caf50;
      color: white;
    }
  </style>
  <script>
    function copyShorthandToClipboard(shorthand) {
      navigator.clipboard.writeText(shorthand);
    }
  </script>
</head>
<body>
  <table>
    <thead>
      <tr>
        <th>Icon</th>
        <th>Name</th>
        <th>Shorthand</th>
        <th>Code</th>
      </tr>
    </thead>
    <tbody>
  `;

  const iconPromises = icons
    .sort((a, b) => a.name.localeCompare(b.name))
    .map(async (icon) => {
      const iconFilePath = path.join(iconPath, `${icon.code}.png`);
      const iconBase64 = (await fs.promises.readFile(iconFilePath)).toString(
        "base64"
      );
      const iconId = `${icon.name.toLowerCase()}`;

      return `
      <tr title=":${iconId}:" onclick="copyShorthandToClipboard(':${iconId}:'); document.getElementById('${iconId}').classList.add('copied'); setTimeout(() => document.getElementById('${iconId}').classList.remove('copied'), 3000)">
        <td><img src="data:image/png;base64,${iconBase64}" alt="${iconId}" width="24px" height="24px"></td>
        <td>${icon.name}</td>
        <td id="${iconId}">:${iconId}:</td>
        <td>${icon.code}</td>
      </tr>
    `;
    });

  const rows = await Promise.all(iconPromises);

  html += rows.join("");

  html += `
    </tbody>
  </table>
</body>
</html>
`;

  return html;
};

export default generatePyRevitEmojiListHTML;
