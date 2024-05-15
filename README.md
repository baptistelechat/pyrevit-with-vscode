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

### 🐍 Components

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
