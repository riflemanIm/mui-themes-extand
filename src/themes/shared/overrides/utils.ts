import type { CSSObject } from "@mui/system";

export const ensureCssObject = (value: unknown): CSSObject =>
  typeof value === "object" && value !== null ? (value as CSSObject) : {};
