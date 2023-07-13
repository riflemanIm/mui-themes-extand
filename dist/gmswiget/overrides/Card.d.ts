import { Theme } from '@mui/material/styles';
export default function Card(theme: Theme): {
    MuiCard: {
        styleOverrides: {
            root: {
                boxShadow: string;
                borderRadius: string;
            };
        };
    };
};
