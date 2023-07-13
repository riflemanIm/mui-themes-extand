import { Theme } from '@mui/material/styles';
export default function Rating(theme: Theme): {
    MuiRating: {
        styleOverrides: {
            root: {
                color: string;
                '& span > span': {
                    top: number;
                    left: number;
                };
            };
        };
    };
};
