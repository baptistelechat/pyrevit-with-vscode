# <img src="https://raw.githubusercontent.com/baptistelechat/pyrevit-with-vscode/main/src/lib/assets/img/logo/pyRevitWithVSCodeLogo_full.png"  height="150" alt="pyRevit with VSCode 🐍">

![GitHub package.json version](https://img.shields.io/github/package-json/v/baptistelechat/pyrevit-with-vscode) ![GitHub License](https://img.shields.io/github/license/baptistelechat/pyrevit-with-vscode) [![GitHub latest commit](https://badgen.net/github/last-commit/baptistelechat/pyrevit-with-vscode)](https://github.com/baptistelechat/pyrevit-with-vscode/commit/main)

A [Visual Studio Code](https://code.visualstudio.com/) extension to simplify the creation of Revit plug-ins using pyRevit.

## Features

The pyRevit with VSCode extension includes useful features for developing pyRevit extensions:

- [Configure VSCode to use pyRevit](https://github.com/baptistelechat/pyrevit-with-vscode?tab=readme-ov-file#%EF%B8%8F-setup)
- [Access documentation](https://github.com/baptistelechat/pyrevit-with-vscode?tab=readme-ov-file#-documentation)
- [Create components](https://github.com/baptistelechat/pyrevit-with-vscode?tab=readme-ov-file#-components)
- [Use basic templates](https://github.com/baptistelechat/pyrevit-with-vscode?tab=readme-ov-file#-snippets)

### 🛠️ Setup

> 💡 All setup functions are launched when the extension is first installed.

Open the command palette (<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>p</kbd>) and search **"🛠️ pyRevit with VSCode: Setup"** to access the VSCode configuration functions for using pyRevit.

A menu opens, showing a choice of options:

- [🐍 Install Python](https://github.com/baptistelechat/pyrevit-with-vscode?tab=readme-ov-file#-install-python)
- [🧩 Install Python extension](https://github.com/baptistelechat/pyrevit-with-vscode?tab=readme-ov-file#-install-python-extension)
- [📕 Install Revit API Stubs](https://github.com/baptistelechat/pyrevit-with-vscode?tab=readme-ov-file#-install-revit-api-stubs---install-pyrevit)
- [📕 Install pyRevit](https://github.com/baptistelechat/pyrevit-with-vscode?tab=readme-ov-file#-install-revit-api-stubs---install-pyrevit)
- [📝 Update "settings.json"](https://github.com/baptistelechat/pyrevit-with-vscode?tab=readme-ov-file#-update-settingsjson)

#### 🐍 Install Python

This option checks if Python is installed on the user's computer. If no Python version is detected, you are invited to install it now by going to [python.org](https://www.python.org/downloads/) or [Microsoft Store](https://apps.microsoft.com/search?query=python).

Once installation is complete, VSCode may need to be restarted to reload all extensions and settings.

#### 🧩 Install Python extension

This option checks if the official [VSCode Python extension](https://marketplace.visualstudio.com/items?itemName=ms-python.python), maintained by Microsoft, is installed or enabled on the user's IDE. If this extension is not detected, you are invited to install or enable it.

- If you choose “Install”, the extension is installed immediately.
- If you choose “ Enable ”, you will be redirected to the extension's panel to activate it.

Once installation is complete, VSCode may need to be restarted to reload all extensions and settings.

#### 📕 Install Revit API Stubs / 📕 Install pyRevit

These 2 options check whether Revit API Stubs and pyRevit are installed on the user's computer.

- If Revit API Stubs is not installed, you are invited to download it. The downloaded folder contains stubs from Revit 2020 to Revit 2024. After downloading, the folder is copied to %APPDATA%.
- If pyRevit is missing, you are invited to download it from the [official pyRevit repository](https://github.com/pyrevitlabs/pyRevit/releases).

Once download and installation are complete, VSCode may need to be restarted to reload all extensions and settings.

#### 📝 Update "settings.json"

If you want autocomplete in your python files, you need Revit API Stubs, pyRevit and the correct configuration of your VSCode settings (settings.json).

This option checks if "python.analysis.extraPaths" and "python.autoComplete.extraPaths" are configured in the VSCode settings. If the properties are empty, you are invited to select the desired Revit versions. Currently, you can choose from Revit 2020 to Revit 2024.

If autocomplete doesn't work, restart VSCode to reload all extensions and parameters.

### 📚 Documentation

Open the command palette (<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>p</kbd>) and search **"📚 pyRevit with VSCode: Documentation"** to access useful online documentation directly from the IDE.

A menu opens, showing a choice of options:

- 📕 Revit API Docs
- 📕 pyRevit
- 🎨 pyRevit Emojis

#### 📕 Revit API Docs

Online documentation for explore Autodesk's Revit API from Revit 2019 to Revit 2024.

#### 📕 pyRevit

Online documentation to learn pyRevit and access to the “Developer Docs” section to get code snippets.

#### 🎨 pyRevit Emojis

You can't insert emojis directly into your code. If you do, the emoji appear in black and white with only the outline. To insert an emoji, you need to write the shorthand of the desired emoji between a colon ( : ). pyRevit provides its own custom icons, and this documentation lists all available icons in a table with, for each line, a preview of the icon, the name, the shorthand and the HEX code. On click of the row, the shorthand code is copy into you're clipboard.

At the top of the table is a search bar for finding an icon. You can find an emoji by typing it into the input field.

Some examples:

- 🐍 → `:snake:`
- 📄 → `:page_facing_up:`
- 💻 → `:laptop_computer:`
- 😉 → `:winking_face:`

### 🐍 Components

Open the command palette (<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>p</kbd>) and search **"🐍 pyRevit with VSCode: Component"** to access functions for easily create a new component.

A menu opens, showing a choice of options:

- [💼 Extension](https://github.com/baptistelechat/pyrevit-with-vscode?tab=readme-ov-file#-extension)
- [📁 Tab](https://github.com/baptistelechat/pyrevit-with-vscode?tab=readme-ov-file#-tab)
- [📦 Panel](https://github.com/baptistelechat/pyrevit-with-vscode?tab=readme-ov-file#-panel)
- [✨ Push Button](https://github.com/baptistelechat/pyrevit-with-vscode?tab=readme-ov-file#-push-button)
- [🔗 Url Button](https://github.com/baptistelechat/pyrevit-with-vscode?tab=readme-ov-file#-url-button)

> 💡 When the user is prompted to select an existing component, the “+ New value” option appears, allowing the user to interrupt the current process and create the desired new component.

#### 💼 Extension

Create a new pyRevit extension by selecting this option. You will be prompt for:

1. 💼 Enter the name of the extension
2. 📁 Enter the name of the tab
3. 📦 Enter the name of the panel
4. ✨ Enter the name of the button
5. 🎨 Select an icon option:
   1. 🐍 Default icon
   2. 💻 Load from user computer (png or svg are accepted)
   3. ⭕ Lucide Icons (you will be prompt for "🎨 Enter a color" and select a icon from a list of +1400 icons)

A new extension will be created in the workspace with the following structure:

```
[new_extension_name].extension
└─ [new_tab_name].tab
   └─ [new_panel_name].panel
      └─ [new_push_button_name].pushbutton
         ├─ icon.png
         └─ script.py
```

A default icon and a python script with the minimal code for work in Revit are added.

```python
# script.py
# --------------------------------------------------
# -*- coding: utf-8 -*-
__title__ = [new_push_button_name]
__author__ = "[pyrevit-with-vscode.author]"
__doc__ = """This is [new_push_button_name] Button.
Click on it see what happens..."""

if __name__ == '__main__':
    print("[new_push_button_name] clicked!")

# --------------------------------------------------
# 💡 pyRevit with VSCode: Use pyrvt or pyrvtmin snippet
# 📄 Template has been developed by Baptiste LECHAT and inspired by Erik FRITS.

```

#### 📁 Tab

Create a new tab in existing extension by selecting this option. You will be prompt for:

1. 💼 Select an extension
2. 📁 Enter the name of the tab

A new tab will be created in the workspace with the following structure:

```
[selected_extension].extension
├─ [existing_tab].tab
│   └─ [existing_panel].panel
│      └─ [existing_push_button].pushbutton
│         ├─ icon.png
│         └─ script.py
└─ [new_tab_name].tab
   └─ New Panel.panel
      └─ Hello World.pushbutton
         ├─ icon.png
         └─ script.py
```

A panel containing a Hello World button with default icon and a python script are added. The script provides the minimal code needed to work in Revit.

```python
# script.py
# --------------------------------------------------
# -*- coding: utf-8 -*-
__title__ = "Hello World"
__author__ = "[pyrevit-with-vscode.author]"
__doc__ = """This is Hello World Button.
Click on it see what happens..."""

if __name__ == '__main__':
    print("Hello World clicked!")

# --------------------------------------------------
# 💡 pyRevit with VSCode: Use pyrvt or pyrvtmin snippet
# 📄 Template has been developed by Baptiste LECHAT and inspired by Erik FRITS.

```

#### 📦 Panel

Create a new panel in existing tab by selecting this option. You will be prompt for:

1. 💼 Select an extension
2. 📁 Select a tab
3. 📦 Enter the name of the panel

A new panel will be created in the workspace with the following structure:

```
[selected_extension].extension
└─ [selected_tab].tab
   ├─ [existing_panel].panel
   │  └─ [existing_push_button].pushbutton
   │     ├─ icon.png
   │     └─ script.py
   └─ [new_panel].panel
      └─ Hello World.pushbutton
         ├─ icon.png
         └─ script.py
```

An Hello World button with default icon and a python script are added. The script provides the minimal code needed to work in Revit.

```python
# script.py
# --------------------------------------------------
# -*- coding: utf-8 -*-
__title__ = "Hello World"
__author__ = "[pyrevit-with-vscode.author]"
__doc__ = """This is Hello World Button.
Click on it see what happens..."""

if __name__ == '__main__':
    print("Hello World clicked!")

# --------------------------------------------------
# 💡 pyRevit with VSCode: Use pyrvt or pyrvtmin snippet
# 📄 Template has been developed by Baptiste LECHAT and inspired by Erik FRITS.

```

#### ✨ Push Button

Create a new push button in existing panel by selecting this option. You will be prompt for:

1. 💼 Select an extension
2. 📁 Select a tab
3. 📦 Select a panel
4. ✨ Enter the name of the button
5. 🎨 Select an icon option:
   1. 🐍 Default icon
   2. 💻 Load from user computer (png or svg are accepted)
   3. ⭕ Lucide Icons (you will be prompt for "🎨 Enter a color" and select a icon from a list of +1400 icons)

A new push button will be created in the workspace with the following structure:

```
[selected_extension].extension
└─ [selected_tab].tab
   └─ [selected_panel].panel
      ├─ [existing_push_button].pushbutton
      │  ├─ icon.png
      │  └─ script.py
      └─ [new_push_button_name].pushbutton
         ├─ icon.png
         └─ script.py
```

A default icon and a python script with the minimal code for work in Revit are added.

```python
# script.py
# --------------------------------------------------
# -*- coding: utf-8 -*-
__title__ = [new_push_button_name]
__author__ = "[pyrevit-with-vscode.author]"
__doc__ = """This is [new_push_button_name] Button.
Click on it see what happens..."""

if __name__ == '__main__':
    print("[new_push_button_name] clicked!")

# --------------------------------------------------
# 💡 pyRevit with VSCode: Use pyrvt or pyrvtmin snippet
# 📄 Template has been developed by Baptiste LECHAT and inspired by Erik FRITS.

```

#### 🔗 Url Button

Create a new url button in existing panel by selecting this option. You will be prompt for:

1. 💼 Select an extension
2. 📁 Select a tab
3. 📦 Select a panel
4. ✨ Enter the name of the button
5. 🔗 Enter an URL
5. 🎨 Select an icon option:
   1. 🐍 Default icon
   2. 💻 Load from user computer (png or svg are accepted)
   3. ⭕ Lucide Icons (you will be prompt for "🎨 Enter a color" and select a icon from a list of +1400 icons)

A new url button will be created in the workspace with the following structure with the given url:

```
[selected_extension].extension
└─ [selected_tab].tab
   └─ [selected_panel].panel
      ├─ [existing_button].pushbutton
      │  ├─ icon.png
      │  └─ script.py
      └─ [new_url_button_name].urlbutton
         ├─ bundle.yaml
         └─ icon.png
```

A default icon and bundle file with given url are added.

```yaml
# bundle.yaml
# --------------------------------------------------
hyperlink: "example.com"
```

### 📄 Snippets

This extension provides 2 templates for easily starting a new python script:

- [📝 pyrvt (pyRevit Full Template)](https://github.com/baptistelechat/pyrevit-with-vscode?tab=readme-ov-file#-pyrvt-pyrevit-full-template)
- [📝 pyrvtmin (pyRevit Min Template)](https://github.com/baptistelechat/pyrevit-with-vscode?tab=readme-ov-file#-pyrvtmin-pyrevit-min-template)

> 📅 The date value is automatically set to the current date.

#### 📝 pyrvt (pyRevit Full Template)

This is the most comprehensive and complete template provided by the pyRevit-with-VSCode extension. It is ideal for beginners in the creation of pyRevit extensions. You can provide information using tabs to move the cursor:

1. Title _(string)_
2. Author _(string)_
3. Minimum Revit version allow _(number: 2020, 2021, 2022, 2023 or 2024)_
4. Maximum Revit version allow _(number: 2024, 2023, 2022, 2021 or 2020)_

"0$" marks the location of your cursor after filling in the previous options.

```python
# -*- coding: utf-8 -*-
__title__ = "${1:title}" # Name of the button displayed in Revit UI
__doc__ = """
Version = 1.0
Date = 19.05.2024
_____________________________________________________________________
Description:
This is a template file for pyRevit Scripts.
_____________________________________________________________________
How-to:
-> Click on the button
-> Change Settings(optional)
-> Make a change
_____________________________________________________________________
Last update:
- [19.05.2024] - 1.0 RELEASE
_____________________________________________________________________
To-Do:
-
_____________________________________________________________________
Author: ${2:John Doe}""" # Button Description shown in Revit UI

# EXTRA: You can remove them.
__author__ = "${2:John Doe}" # Script's Author
__helpurl__ = "https://github.com/baptistelechat/pyrevit-with-vscode" # Link that can be opened with F1 when hovered over the tool in Revit UI.
__min_revit_ver__ = ${3|2020,2021,2022,2023,2024|} # Limit your Scripts to certain Revit versions if it's not compatible due to RevitAPI Changes.
__max_revit_ver__ = ${4|2024,2023,2022,2021,2020|} # Limit your Scripts to certain Revit versions if it's not compatible due to RevitAPI Changes.
# __highlight__ = "new" # Button will have an orange dot + Description in Revit UI ("new" | "updated"
# __context__ = [ "selection", "active-section-view"] # Make it available only if Active view is Section and something is Selected
# __context__     = ["Walls", "Floors", "Roofs"] # Make your button available only when certain categories are selected. Or Revit/View Types.

# 🔗 For extra bundle metadata : https://pyrevitlabs.notion.site/Bundle-Metadata-9fa4911c14fa49c48e715421400f1427
# 🔗 For extra bundle context : https://pyrevitlabs.notion.site/Bundle-Context-630fa1f3611f4ee0aa15d290275e7ef3

# ╦╔╦╗╔═╗╔═╗╦═╗╔╦╗╔═╗
# ║║║║╠═╝║ ║╠╦╝ ║ ╚═╗
# ╩╩ ╩╩  ╚═╝╩╚═ ╩ ╚═╝ IMPORTS 📚
# ==================================================
# Regular + Autodesk
import os, sys, math, datetime, time # Regular Imports
from Autodesk.Revit.DB import * # Import everything from DB or Import only classes that are used. (from Autodesk.Revit.DB import Transaction, FilteredElementCollector)

# pyRevit
from pyrevit import revit, forms, script # type: ignore # import pyRevit modules.

# Custom Imports
# from Snippets._selection import get_selected_elements # lib import
# from Snippets._convert import convert_internal_to_m # lib import

# .NET Imports
import clr # Common Language Runtime. Makes .NET libraries accessible
clr.AddReference("System") # Reference System.dll for import.
from System.Collections.Generic import List # type: ignore # List<ElementType>() <- it's special type of list from .NET framework that RevitAPI requires

# ╦  ╦╔═╗╦═╗╦╔═╗╔╗ ╦  ╔═╗╔═╗
# ╚╗╔╝╠═╣╠╦╝║╠═╣╠╩╗║  ║╣ ╚═╗
#  ╚╝ ╩ ╩╩╚═╩╩ ╩╚═╝╩═╝╚═╝╚═╝ VARIABLES 📄
# ==================================================
doc   = __revit__.ActiveUIDocument.Document # type: ignore # Document class from RevitAPI that represents project. Used to Create, Delete, Modify and Query elements from the project.
uidoc = __revit__.ActiveUIDocument # type: ignore # UIDocument class from RevitAPI that represents Revit project opened in the Revit UI.
app   = __revit__.Application # type: ignore # Represents the Autodesk Revit Application, providing access to documents, options and other application wide data and settings.
rvt_year = int(app.VersionNumber) # Get current revit version.
PATH_SCRIPT = os.path.dirname(__file__) # Absolute path to the folder where script is placed.

# GLOBAL VARIABLES

# - Place global variables here.
logger = script.get_logger()

# ╔═╗╦ ╦╔╗╔╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
# ╠╣ ║ ║║║║║   ║ ║║ ║║║║╚═╗
# ╚  ╚═╝╝╚╝╚═╝ ╩ ╩╚═╝╝╚╝╚═╝ FUNCTIONS 🛠️
# ==================================================

# - Place local functions here. If you might use any functions in other scripts, consider placing it in the lib folder.

# ╔═╗╦  ╔═╗╔═╗╔═╗╔═╗╔═╗
# ║  ║  ╠═╣╚═╗╚═╗║╣ ╚═╗
# ╚═╝╩═╝╩ ╩╚═╝╚═╝╚═╝╚═╝ CLASSES 📦
# ==================================================

# - Place local classes here. If you might use any classes in other scripts, consider placing it in the lib folder.

# ╔╦╗╔═╗╦╔╗╔
# ║║║╠═╣║║║║
# ╩ ╩╩ ╩╩╝╚╝ MAIN 🎯
# ==================================================
# 📝 For input display: https://pyrevitlabs.notion.site/Effective-Input-ea95e95282a24ba9b154ef88f4f8d056
# 🎨 For output display : https://pyrevitlabs.notion.site/Effective-Output-43baf34d2ca247ada8e040bcb86613a2
# 📊 For data visualization : https://pyrevitlabs.notion.site/Visualizing-Data-fd778a0b67354ff581aa340619b87803

if __name__ == '__main__':
    # START CODE HERE

    # AVOID  placing Transaction inside of your loops! It will drastically reduce performance of your script.
    t = Transaction(doc,__title__) # 🔏 Transactions are context-like objects that guard any changes made to a Revit model.

    # You need to use t.Start() and t.Commit() to make changes to a Project.
    t.Start() # <- Transaction Start 🔓

    #- CHANGES TO REVIT PROJECT HERE 🏡
    $0

    t.Commit() # <- Transaction End 🔒

    # Notify user that script is complete. 🔔
    logger.success(':chequered_flag: Script is finished.')
    print('-' * 50)
    print(':page_facing_up: Template has been developed by Baptiste LECHAT and inspired by Erik FRITS.')
```

#### 📝 pyrvtmin (pyRevit Min Template)

This is minimal template provided by the pyRevit-with-VSCode extension. It is ideal for user that master the the creation of pyRevit extensions. You can provides:

1. Title _(string)_
2. Author _(string)_

"0$" marks the location of your cursor after filling in the previous options.

```python
# -*- coding: utf-8 -*-
__title__ = "${1:title}"
__doc__ = """
Version = 1.0
Date = 19.05.2024
_____________________________________________________________________
Description:
This is a template file for pyRevit Scripts.
_____________________________________________________________________
How-to:
-> Click on the button
-> Change Settings(optional)
-> Make a change
_____________________________________________________________________
Last update:
- [19.05.2024] - 1.0 RELEASE
_____________________________________________________________________
To-Do:
-
_____________________________________________________________________
Author: ${2:John Doe}"""

# ╦╔╦╗╔═╗╔═╗╦═╗╔╦╗╔═╗
# ║║║║╠═╝║ ║╠╦╝ ║ ╚═╗
# ╩╩ ╩╩  ╚═╝╩╚═ ╩ ╚═╝ IMPORTS 📚
# ==================================================
# Regular + Autodesk
from Autodesk.Revit.DB import *

# pyRevit
from pyrevit import revit, forms, script # type: ignore

# .NET Imports
import clr
clr.AddReference("System")
from System.Collections.Generic import List # type: ignore

# ╦  ╦╔═╗╦═╗╦╔═╗╔╗ ╦  ╔═╗╔═╗
# ╚╗╔╝╠═╣╠╦╝║╠═╣╠╩╗║  ║╣ ╚═╗
#  ╚╝ ╩ ╩╩╚═╩╩ ╩╚═╝╩═╝╚═╝╚═╝ VARIABLES 📄
# ==================================================
doc   = __revit__.ActiveUIDocument.Document # type: ignore
uidoc = __revit__.ActiveUIDocument # type: ignore
app   = __revit__.Application # type: ignore
rvt_year = int(app.VersionNumber)

logger = script.get_logger()

# ╔╦╗╔═╗╦╔╗╔
# ║║║╠═╣║║║║
# ╩ ╩╩ ╩╩╝╚╝ MAIN 🎯
# ==================================================
if __name__ == '__main__':
    # START CODE HERE
    $0

    print('-' * 50)
    print(':page_facing_up: Template has been developed by Baptiste LECHAT and inspired by Erik FRITS.')
```

## 🔄 Translation

This extension use l10n (localisation) and is currently available in:

- English _(en)_
- French _(fr)_

## 😸 Maintainers

This project is mantained by:

- [Baptiste LECHAT - baptistelechat](https://github.com/baptistelechat)

## ⭐ Show your support

Give a ⭐️ for support the project or if this project helped you !
