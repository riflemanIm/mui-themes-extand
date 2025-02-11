import { Theme } from "@mui/material/styles";
export default function Autocomplete(theme: Theme): {
    MuiAutocomplete: {
        styleOverrides: {
            paper: {
                boxShadow: string;
            };
        };
    };
};
