import { Theme } from "@mui/material/styles";
export default function CssBaseline(theme: Theme): {
    MuiCssBaseline: {
        styleOverrides: {
            "*": {
                margin: number;
                padding: number;
                boxSizing: string;
            };
            html: {
                width: string;
                height: string;
                WebkitOverflowScrolling: string;
            };
            body: {
                width: string;
                height: string;
                backgroundColor: string;
            };
            "#root": {
                width: string;
                height: string;
            };
            input: {
                "&[type=number]": {
                    MozAppearance: string;
                    "&::-webkit-outer-spin-button": {
                        margin: number;
                        WebkitAppearance: string;
                    };
                    "&::-webkit-inner-spin-button": {
                        margin: number;
                        WebkitAppearance: string;
                    };
                };
            };
            img: {
                display: string;
                maxWidth: string;
            };
        };
    };
};
