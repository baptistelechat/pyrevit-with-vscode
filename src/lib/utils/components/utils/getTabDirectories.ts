import { showErrorMessage } from "../../showMessage";
import getDirectories from "./getDirectories";

const getTabDirectories = (extensionPath: string) => {
  const tabDirectories = getDirectories(extensionPath).filter((dir) =>
    dir.endsWith(".tab")
  );

  if (tabDirectories.length === 0) {
    showErrorMessage("No tab found.");
    return [];
  }

  return tabDirectories;
};

export default getTabDirectories;
