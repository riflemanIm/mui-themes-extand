import { Theme } from '@mui/material/styles';
export default function Picker(theme: Theme): {
    MuiPickerStaticWrapper: {
        styleOverrides: {
            root: {
                [x: string]: string | number | {
                    width: number;
                };
                margin: number;
                backgroundColor: string;
                width: string;
            };
        };
    };
    MuiCalendarPicker: {
        styleOverrides: {
            root: {
                [x: string]: string | number | {
                    width: number;
                };
                width: string;
                margin: number;
            };
        };
    };
};
