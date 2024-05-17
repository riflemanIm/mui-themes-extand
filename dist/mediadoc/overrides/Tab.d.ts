import { Theme } from '@mui/material/styles';
export default function Input(theme: Theme): {
    MuiTab: {
        styleOverrides: {
            root: {
                color: string;
                '&.Mui-selected': {
                    color: string;
                };
            };
        };
    };
};
