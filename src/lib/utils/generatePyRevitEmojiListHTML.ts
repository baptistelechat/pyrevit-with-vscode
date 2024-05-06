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
    input[type="text"] {
      padding: 8px;
      border: 2px solid #333333;
      border-radius: 4px;
      outline: none;
      width: 50%;
      box-sizing: border-box;
      margin-top: 16px;
      margin-bottom: 16px;
    }
    input[type="text"]:focus {
      border-color: #666666;
    }
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
    tr:hover td {
      background-color: #666666;
      color: #1a1a1a;
      cursor: pointer;
    }
    .copied {
      background-color: #4caf50 !important;
      color: white;
    }
  </style>
  <script>
    function copyShorthandToClipboard(elementId) {
      navigator.clipboard.writeText(":"+elementId+":");
      const element = document.getElementById(elementId);
      element.classList.add('copied');
      setTimeout(() => element.classList.remove('copied'), 3000);
    }

    function filterTable() {
      const input = document.getElementById("search-box");
      const filter = input.value;
      const table = document.getElementById("emoji-table");
      const rows = Array.from(table.getElementsByTagName("tr"));

      rows.map((row) => {
        row.style.display = "table-row";

        const tdName = row.getElementsByTagName("td")[1];
        const tdShorthand = row.getElementsByTagName("td")[2];
        const tdCode = row.getElementsByTagName("td")[3];

        if (tdName || tdShorthand || tdCode) {
          if (tdName.textContent && tdName.textContent.toUpperCase().indexOf(filter.toUpperCase()) > -1) {
            row.style.display = "table-row"
          }

          else if (tdShorthand.textContent && tdShorthand.textContent.toUpperCase().indexOf(filter.toUpperCase()) > -1) {
            row.style.display = "table-row"
          }

          else if (filter.length <= 2) {
            const code = filter.codePointAt(0).toString(16);
            if (tdCode.textContent && tdCode.textContent.toUpperCase() === code.toUpperCase()) {
              row.style.display = "table-row"
            } else {
              row.style.display = "none"
            }
          }

          else {
            row.style.display = "none"
          }
        }
      });
    }
  </script>
</head>
<body>
  <input type="text" id="search-box" placeholder="Rechercher..." oninput="filterTable()">
  <table id="emoji-table">
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
      <tr title=":${iconId}:" onclick="copyShorthandToClipboard('${iconId}')">
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
