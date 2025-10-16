import { Theme } from "@mui/material/styles";
export default function Tab(theme: Theme): {
    MuiTab: {
        styleOverrides: {
            root: {
                color: string;
                "&.Mui-selected": {
                    color: string;
                };
            };
        };
    };
};
//# sourceMappingURL=Tab.d.ts.map