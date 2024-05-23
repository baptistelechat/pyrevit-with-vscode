import * as fs from "fs";
import svg2png from "svg2png";

const convertSvgToPng = async (
  svgPath: string,
  pngPath: string,
  width: number,
  height: number
): Promise<void> => {
  if (svgPath.startsWith("data:image/svg+xml;base64")) {
    const response = await fetch(svgPath);
    const svgString = await response.text();
    const svgBuffer = Buffer.from(svgString, "utf-8");
    const pngBuffer = await svg2png(svgBuffer, { width, height });

    fs.writeFileSync(pngPath, pngBuffer);
  } else {
    const svg = fs.readFileSync(svgPath);
    const pngBuffer = await svg2png(svg, { width, height });

    fs.writeFileSync(pngPath, pngBuffer);
  }
};

export default convertSvgToPng;
