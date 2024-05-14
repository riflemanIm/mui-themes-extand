import { Theme } from "@mui/material/styles";
export default function Button(theme: Theme): {
    MuiButtonBase: {
        styleOverrides: {
            root: {
                textTransform: string;
            };
        };
    };
    MuiButton: {
        styleOverrides: {
            root: {
                textTransform: string;
                borderRadius: number;
                fontStyle: string;
                fontWeight: number;
                boxShadow: string;
                border: number;
                "&:hover": {
                    border: number;
                    background: string;
                };
                "&.Mui-disabled": {
                    background: string;
                    opacity: number;
                    color: string;
                };
                "&.Mui-select": {
                    backgroundColor: string;
                    color: string;
                    border: string;
                };
            };
            containedPrimary: {
                color: string;
                background: string;
                boxShadow: string;
                "&:hover": {
                    background: string;
                    opacity: number;
                    boxShadow: string;
                };
            };
            containedSecondary: {
                color: string;
                background: string;
                boxShadow: string;
                "&:hover": {
                    background: string;
                    boxShadow: string;
                };
            };
            outlinedPrimary: {
                color: string;
                backgroundColor: string;
                boxShadow: string;
                "&:hover": {
                    backgroundColor: string;
                    color: string;
                    boxShadow: string;
                };
            };
            outlinedInfo: {
                color: string;
                backgroundColor: string;
                boxShadow: string;
                "&:hover": {
                    backgroundColor: string;
                    color: string;
                };
            };
            outlinedSuccess: {
                color: string;
                backgroundColor: string;
                "&:hover": {
                    color: string;
                    backgroundColor: string;
                    boxShadow: string;
                };
            };
            containedSuccess: {
                color: string;
                backgroundColor: string;
                "&:hover": {
                    backgroundColor: string;
                    boxShadow: string;
                };
            };
            containedWarning: {
                color: string;
                backgroundColor: string;
                "&:hover": {
                    backgroundColor: string;
                    boxShadow: string;
                };
            };
            containedInfo: {
                color: string;
                backgroundColor: string;
                "&:hover": {
                    backgroundColor: string;
                    boxShadow: string;
                };
            };
        };
    };
};
