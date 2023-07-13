import { Theme } from "@mui/material/styles";
export default function Alert(theme: Theme): {
    MuiAlert: {
        styleOverrides: {
            icon: {
                color: string;
            };
            root: {
                boxShadow: string;
                borderRadius: string;
            };
            standardWarning: {
                backgroundColor: string;
            };
            standardError: {
                backgroundColor: string;
            };
            standardInfo: {
                backgroundColor: string;
            };
            standardSuccess: {
                backgroundColor: string;
            };
        };
    };
};
