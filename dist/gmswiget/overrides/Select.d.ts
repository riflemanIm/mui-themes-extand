import { Theme } from '@mui/material/styles';
export default function Select(theme: Theme): {
    MuiSelect: {
        styleOverrides: {
            select: {
                backgroundColor: string;
                whiteSpace: string;
                fontSize: string;
            };
        };
    };
};
