import { Theme } from "@mui/material/styles";
export default function Paper(theme: Theme): {
    MuiPaper: {
        styleOverrides: {
            root: {
                backgroundColor: string;
                backgroundSize: string;
                boxSizing: string;
                boxShadow: string;
                transition: string;
            };
        };
    };
};
