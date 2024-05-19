import * as vscode from "vscode";

const defaultPyRevitScript = (buttonName: string) => {
  const config = vscode.workspace.getConfiguration();
  const author = config.get<string>("pyrevit-with-vscode.author");

  return `# -*- coding: utf-8 -*-
__title__ = "${buttonName}"
__author__ = "${author}"
__doc__ = """This is ${buttonName} Button.
Click on it see what happens..."""

if __name__ == '__main__':
    print("${buttonName} clicked!")

# --------------------------------------------------
# 💡 pyRevit with VSCode: Use pyrvt or pyrvtmin snippet
# 📄 Template has been developed by Baptiste LECHAT and inspired by Erik FRITS.`;
};

export default defaultPyRevitScript;
