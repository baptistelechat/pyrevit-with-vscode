<h1 align="center">pyRevit with VSCode 🐍</h1>

  <!-- <img src="https://raw.githubusercontent.com/baptistelechat/pyrevit-with-vscode/publish/src/lib/assets/img/logo/pyRevitWithVSCodeLogo.png" height="150" align="right"> -->

A [Visual Studio Code](https://code.visualstudio.com/) extension to simplify the creation of Revit plug-ins using pyRevit.

<a href="https://gitmoji.carloscuesta.me">
	<img src="https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=flat-square" alt="Gitmoji">
</a>

## Features

The pyRevit with VSCode extension includes useful features for developing pyRevit extensions:

- Configure VSCode to use pyRevit,
- Access documentation,
- Create components,
- Use basic templates

### 🛠️ Setup

> 💡 All setup functions are launched when the extension is first installed.

Open the command palette (<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>p</kbd>) and search **"🛠️ pyRevit with VSCode: Setup"** to access the VSCode configuration functions for using pyRevit.

A menu opens, showing a choice of options:

- 🐍 Install Python
- 🧩 Install Python extension
- 📕 Install Revit API Stubs
- 📕 Install pyRevit
- 📝 Update "settings.json"

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

- 💼 Extension
- 📁 Tab
- 📦 Panel
- ✨ Push Button
- 🔗 Url Button

> 💡 When the user is prompted to select an existing component, the “+ New value” option appears, allowing the user to interrupt the current process and create the desired new component.

#### 💼 Extension

Create a new pyRevit extension by selecting this option. You will be prompt for :

1. 💼 Enter the name of the extension
2. 📁 Enter the name of the tab
3. 📦 Enter the name of the panel
4. ✨ Enter the name of the button

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

> 👤 The script author is automatically retrieved from your VSCode parameters: **"pyrevit-with-vscode.author"** (default value = "John Doe").

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

Create a new tab in existing extension by selecting this option. You will be prompt for :

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

> 👤 The script author is automatically retrieved from your VSCode parameters: **"pyrevit-with-vscode.author"** (default value = "John Doe").

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

Create a new panel in existing tab by selecting this option. You will be prompt for :

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

> 👤 The script author is automatically retrieved from your VSCode parameters: **"pyrevit-with-vscode.author"** (default value = "John Doe").

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

Create a new push button in existing panel by selecting this option. You will be prompt for :

1. 💼 Select an extension
2. 📁 Select a tab
3. 📦 Select a panel
4. ✨ Enter the name of the button

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

> 👤 The script author is automatically retrieved from your VSCode parameters: **"pyrevit-with-vscode.author"** (default value = "John Doe").

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

Create a new url button in existing panel by selecting this option. You will be prompt for :

1. 💼 Select an extension
2. 📁 Select a tab
3. 📦 Select a panel
4. ✨ Enter the name of the button
5. 🔗 Enter an URL

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

### 👽 Others

## 😸 Maintainers

This project is mantained by:

- [Baptiste LECHAT - baptistelechat](https://github.com/baptistelechat)

## 👨‍💻👩‍💻 Contributing

1. Fork it
2. Create your feature branch (git checkout -b my-new-feature)
3. Commit your changes (git commit -m 'Add some feature')
4. Push your branch (git push origin my-new-feature)
5. Create a new Pull Request

## ⭐ Show your support

Give a ⭐️ for support the project or if this project helped you !
