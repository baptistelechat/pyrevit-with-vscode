import { showErrorMessage } from "../../showMessage";
import getDirectories from "./getDirectories";

const getPanelDirectories = (tabPath: string) => {
  const panelDirectories = getDirectories(tabPath).filter((dir) =>
    dir.endsWith(".panel")
  );

  if (panelDirectories.length === 0) {
    showErrorMessage("No panel found.");
    return [];
  }

  return panelDirectories;
};

export default getPanelDirectories;
