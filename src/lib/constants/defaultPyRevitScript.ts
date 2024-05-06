const defaultPyRevitScript = (buttonName: string) => `# -*- coding: utf-8 -*-
__title__ = "${buttonName}"
__author__ = "John Doe"
__doc__ = """This is ${buttonName} Button.
Click on it see what happens..."""

if __name__ == '__main__':
    print("${buttonName} clicked!")

# --------------------------------------------------
# 💡 pyRevit with VSCode: Use pyrvt ou pyrvtmin snippet`;

export default defaultPyRevitScript;
