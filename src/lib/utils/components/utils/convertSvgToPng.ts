import * as fs from "fs";
import sharp from "sharp";
import svgson from "svgson";

const convertSvgToPng = async (
  svgPath: string,
  pngPath: string,
  width: number,
  height: number
): Promise<void> => {
  const svg = fs.readFileSync(svgPath, "utf8");
  const document = svgson.parse(svg);

  const pngBuffer = await sharp(Buffer.from(document.toString()))
    .resize(width, height)
    .png()
    .toBuffer();

  fs.writeFileSync(pngPath, pngBuffer);
};

export default convertSvgToPng;
