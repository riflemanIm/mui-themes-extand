import { Theme } from '@mui/material/styles';
export default function Input(theme: Theme): {
    MuiInput: {
        styleOverrides: {
            underline: {
                '&:before': {
                    borderBottom: string;
                };
                '&:hover:not(.Mui-disabled):before': {
                    borderBottom: string;
                };
            };
        };
    };
    MuiFilledInput: {
        styleOverrides: {
            root: {
                backgroundColor: string;
                '&:hover': {
                    backgroundColor: string;
                };
                '&.Mui-focused': {
                    backgroundColor: string;
                };
                '&.Mui-disabled': {
                    backgroundColor: string;
                };
            };
            underline: {
                '&:before': {
                    borderBottomColor: string;
                };
            };
        };
    };
    MuiOutlinedInput: {
        styleOverrides: {
            root: {
                borderWidth: number;
                borderRadius: string;
                backgroundColor: string;
                '&.Mui-focused': {
                    backgroundColor: string;
                };
                '& fieldset': {
                    borderColor: string;
                };
                '&.Mui-disabled .MuiOutlinedInput-notchedOutline': {
                    borderColor: string;
                };
                '&.Mui-disabled:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: string;
                };
                '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: string;
                    borderWidth: number;
                };
                '&.Mui-focused fieldset': {
                    borderWidth: number;
                };
            };
        };
    };
};
