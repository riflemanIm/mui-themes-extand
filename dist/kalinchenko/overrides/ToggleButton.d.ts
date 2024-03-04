import { Theme } from "@mui/material/styles";
export default function ToggleButton(theme: Theme): {
    MuiToggleButton: {
        styleOverrides: {
            root: {
                padding: string;
                border: string;
                width: string;
                height: number;
                boxSizing: string;
                borderRadius: string;
                textTransform: string;
                fontStyle: string;
                fontWeight: number;
                color: string;
                background: string;
                boxShadow: string;
                "&:hover": {
                    color: string;
                    background: string;
                };
                "&.Mui-selected": {
                    color: string;
                    backgroundColor: string;
                };
            };
        };
    };
};
