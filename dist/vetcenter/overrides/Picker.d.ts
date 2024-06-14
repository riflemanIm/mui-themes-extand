export default function Picker(): {
    MuiPickerStaticWrapper: {
        styleOverrides: {
            root: {
                minWidth: string;
                backgroundColor: string;
            };
        };
    };
    MuiCalendarPicker: {
        styleOverrides: {
            root: {
                width: number;
            };
        };
    };
};
