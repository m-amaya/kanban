import type { CSS } from "@stitches/react";
import type { ReactNode } from "react";
import { config } from "~/styles";
import { tokens } from "~/tokens";

export type { IconNames } from "~/tokens/icons";
export type ReactChildren = ReactNode | ReactNode[];
export type StitchesCSS = CSS<typeof config>;
export type FontStyleType = keyof typeof tokens.fontSizes;

export interface PropsWithChild {
  children?: ReactNode;
}

export interface PropsWithChildren {
  children?: ReactChildren;
}

export interface CommonProps {
  css?: StitchesCSS;
  className?: string;
  testId?: string;
}
