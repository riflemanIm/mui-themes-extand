import { Theme } from '@mui/material/styles';
export default function Lists(theme: Theme): {
    MuiListItem: {
        styleOverrides: {
            root: {
                '&$selected': {
                    backgroundColor: string;
                    '&:focus': {
                        backgroundColor: string;
                    };
                };
            };
            button: {
                '&:hover, &:focus': {
                    backgroundColor: string;
                };
            };
        };
    };
    MuiListItemIcon: {
        styleOverrides: {
            root: {
                color: string;
                minWidth: string;
                marginRight: string;
            };
        };
    };
    MuiListItemAvatar: {
        styleOverrides: {
            root: {
                minWidth: string;
                marginRight: string;
            };
        };
    };
    MuiListItemText: {
        styleOverrides: {
            primary: {
                fontWeight: number;
            };
        };
    };
};
