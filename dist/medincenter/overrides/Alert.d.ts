import { Theme } from '@mui/material/styles';
export default function Alert(theme: Theme): {
    MuiAlert: {
        styleOverrides: {
            icon: {
                fontSize: number;
            };
            root: {
                boxShadow: string;
                borderRadius: string;
            };
            standardWarning: {
                backgroundColor: string;
                icon: {
                    color: string;
                };
            };
            standardError: {
                backgroundColor: string;
                icon: {
                    color: string;
                };
            };
            standardInfo: {
                backgroundColor: string;
                icon: {
                    color: string;
                };
            };
            standardSuccess: {
                backgroundColor: string;
                icon: {
                    color: string;
                };
            };
        };
    };
};
