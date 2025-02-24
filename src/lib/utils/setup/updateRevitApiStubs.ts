import * as fs from "fs";
import * as path from "path";
import simpleGit from "simple-git";
import revitApiStubsPath from "../../constants/revitApiStubsPath";
import { showInformationMessage } from "../showMessage";

export const updateRevitApiStubs = async () => {
  const sourcePath = path.join(
    __dirname,
    "..",
    "..",
    "..",
    "..",
    "src",
    "lib",
    "assets",
    "RevitAPI stubs"
  );

  const gitRepoUrl = "https://github.com/gtalarico/ironpython-stubs.git";
  const localRepoPath = path.join(revitApiStubsPath, "ironpython-stubs");

  // Create the destination directory if it doesn't exist
  fs.mkdirSync(revitApiStubsPath, { recursive: true });

  // Copy local files
  fs.cpSync(sourcePath, revitApiStubsPath, { recursive: true });

  const git = simpleGit();

  // Check if the repository directory exists
  if (fs.existsSync(localRepoPath)) {
    // Update existing repository
    try {
      await git.cwd(localRepoPath).pull();
      showInformationMessage(
        "The IronPython Stubs repository has been updated."
      );
    } catch (error) {
      showInformationMessage(
        "Failed to update the IronPython Stubs repository. Please check your internet connection."
      );
      console.error("Error updating repository:", error);
    }
  } else {
    // Clone the GitHub repository
    try {
      await git.clone(gitRepoUrl, localRepoPath);
      showInformationMessage(
        "The Revit API Stubs and IronPython Stubs are downloaded and placed in %APPDATA%."
      );
    } catch (error) {
      showInformationMessage(
        "Failed to clone the IronPython Stubs repository. Please check your internet connection."
      );
      console.error("Error cloning repository:", error);
    }
  }
};
