import * as os from "os";
import { showErrorMessage } from "./showMessage";

const checkOs = () => {
  // Check the user's operating system and display an error message if it's not a win32 user
  const platform = os.platform();

  if (platform !== "win32") {
    showErrorMessage(
      "pyRevit-with-vscode only supports Windows operating system."
    );
    return false;
  }

  return true;
};

export default checkOs;
