import hexRgb from "hex-rgb";

import { tokens } from "~/tokens";

const { palette } = tokens;

const rgba = (color: keyof typeof palette, alpha: number) =>
  hexRgb(palette[color], { alpha, format: "css" });

export default rgba;
