import * as fs from "fs";
import svg2png from "svg2png";

const convertSvgToPng = async (
  svgPath: string,
  pngPath: string,
  width: number,
  height: number
): Promise<void> => {
  const svg = fs.readFileSync(svgPath);
  const pngBuffer = await svg2png(svg, { width, height });

  fs.writeFileSync(pngPath, pngBuffer);
};

export default convertSvgToPng;
