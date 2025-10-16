import { Components, Theme } from "@mui/material/styles";
import createButtonOverrides from "@/themes/shared/overrides/button";

export default function Button(theme: Theme): Components<Theme> {
  return createButtonOverrides(theme);
}
