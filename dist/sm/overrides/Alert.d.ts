import { Theme } from "@mui/material/styles";
export default function Alert(theme: Theme): {
    MuiAlert: {
        styleOverrides: {
            root: {
                borderRadius: string;
                "& .MuiAlert-icon": {
                    fontSize: string;
                };
            };
            standardWarning: {
                backgroundColor: string;
                "& .MuiAlert-icon": {
                    color: string;
                };
            };
            standardError: {
                backgroundColor: string;
                "& .MuiAlert-icon": {
                    color: string;
                };
            };
            standardInfo: {
                backgroundColor: string;
                "& .MuiAlert-icon": {
                    color: string;
                };
            };
            standardSuccess: {
                backgroundColor: string;
                "& .MuiAlert-icon": {
                    color: string;
                };
            };
        };
    };
};
