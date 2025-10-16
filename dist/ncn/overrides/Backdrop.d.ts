import { Theme } from "@mui/material/styles";
export default function Backdrop(theme: Theme): {
    MuiBackdrop: {
        styleOverrides: {
            root: {
                background: string[];
                "&.MuiBackdrop-invisible": {
                    background: string;
                };
            };
        };
    };
};
//# sourceMappingURL=Backdrop.d.ts.map