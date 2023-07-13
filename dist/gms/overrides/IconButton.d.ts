import { Theme } from "@mui/material/styles";
export default function IconButton(theme: Theme): {
    MuiIconButton: {
        styleOverrides: {
            root: {
                "& span > svg": {
                    color: string;
                };
            };
        };
    };
};
