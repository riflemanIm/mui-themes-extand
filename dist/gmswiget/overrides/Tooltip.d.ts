import { Theme } from '@mui/material/styles';
export default function Tooltip(theme: Theme): {
    MuiTooltip: {
        styleOverrides: {
            tooltip: {
                backgroundColor: string;
            };
            arrow: {
                color: string;
            };
        };
    };
};
