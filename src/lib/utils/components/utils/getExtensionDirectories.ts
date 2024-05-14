import { showErrorMessage } from "../../showMessage";
import getDirectories from "./getDirectories";

const getExtensionDirectories = (workspacePath: string) => {
  const extensionDirectories = getDirectories(workspacePath).filter((dir) =>
    dir.endsWith(".extension")
  );

  if (extensionDirectories.length === 0) {
    showErrorMessage("No extension found.");
    return [];
  }

  return extensionDirectories;
};

export default getExtensionDirectories;
