import { Theme } from "@mui/material/styles";
export default function Typography(theme: Theme): {
    MuiTypography: {
        styleOverrides: {
            paragraph: {
                marginBottom: string;
            };
            gutterBottom: {
                marginBottom: string;
            };
            body2: {
                color: string;
            };
            caption: {
                fontSize: number;
            };
            caption_date: {
                fontSize: number;
            };
            subtitle2: {
                color: string;
            };
        };
    };
};
