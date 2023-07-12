export default function Picker() {
  return {
    MuiPickerStaticWrapper: {
      styleOverrides: {
        root: {
          minWidth: 'auto',
          backgroundColor: 'transparent',
        },
      },
    },
    MuiCalendarPicker: {
      styleOverrides: {
        root: {
          width: 300,
        },
      },
    },
  };
}
