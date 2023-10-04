import { Theme } from '@mui/material/styles';
export default function Button(theme: Theme): {
    MuiButtonBase: {
        styleOverrides: {
            root: {
                textTransform: string;
            };
        };
    };
    MuiButton: {
        styleOverrides: {
            root: {
                textTransform: string;
                borderRadius: number;
                fontStyle: string;
                fontWeight: number;
                boxShadow: string;
                border: number;
                '&:hover': {
                    border: number;
                    background: string;
                };
                '&.Mui-disabled': {
                    background: string;
                    color: string;
                };
                '&.Mui-select': {
                    backgroundColor: string;
                    color: string;
                    border: string;
                };
            };
            containedPrimary: {
                color: string;
                background: string;
                boxShadow: string;
                '&:hover': {
                    background: string;
                    boxShadow: string;
                };
            };
            containedSecondary: {
                color: "inherit" | "transparent" | (string & {}) | "-moz-initial" | "initial" | "revert" | "revert-layer" | "unset" | "aliceblue" | "antiquewhite" | "aqua" | "aquamarine" | "azure" | "beige" | "bisque" | "black" | "blanchedalmond" | "blue" | "blueviolet" | "brown" | "burlywood" | "cadetblue" | "chartreuse" | "chocolate" | "coral" | "cornflowerblue" | "cornsilk" | "crimson" | "cyan" | "darkblue" | "darkcyan" | "darkgoldenrod" | "darkgray" | "darkgreen" | "darkgrey" | "darkkhaki" | "darkmagenta" | "darkolivegreen" | "darkorange" | "darkorchid" | "darkred" | "darksalmon" | "darkseagreen" | "darkslateblue" | "darkslategray" | "darkslategrey" | "darkturquoise" | "darkviolet" | "deeppink" | "deepskyblue" | "dimgray" | "dimgrey" | "dodgerblue" | "firebrick" | "floralwhite" | "forestgreen" | "fuchsia" | "gainsboro" | "ghostwhite" | "gold" | "goldenrod" | "gray" | "green" | "greenyellow" | "grey" | "honeydew" | "hotpink" | "indianred" | "indigo" | "ivory" | "khaki" | "lavender" | "lavenderblush" | "lawngreen" | "lemonchiffon" | "lightblue" | "lightcoral" | "lightcyan" | "lightgoldenrodyellow" | "lightgray" | "lightgreen" | "lightgrey" | "lightpink" | "lightsalmon" | "lightseagreen" | "lightskyblue" | "lightslategray" | "lightslategrey" | "lightsteelblue" | "lightyellow" | "lime" | "limegreen" | "linen" | "magenta" | "maroon" | "mediumaquamarine" | "mediumblue" | "mediumorchid" | "mediumpurple" | "mediumseagreen" | "mediumslateblue" | "mediumspringgreen" | "mediumturquoise" | "mediumvioletred" | "midnightblue" | "mintcream" | "mistyrose" | "moccasin" | "navajowhite" | "navy" | "oldlace" | "olive" | "olivedrab" | "orange" | "orangered" | "orchid" | "palegoldenrod" | "palegreen" | "paleturquoise" | "palevioletred" | "papayawhip" | "peachpuff" | "peru" | "pink" | "plum" | "powderblue" | "purple" | "rebeccapurple" | "red" | "rosybrown" | "royalblue" | "saddlebrown" | "salmon" | "sandybrown" | "seagreen" | "seashell" | "sienna" | "silver" | "skyblue" | "slateblue" | "slategray" | "slategrey" | "snow" | "springgreen" | "steelblue" | "tan" | "teal" | "thistle" | "tomato" | "turquoise" | "violet" | "wheat" | "white" | "whitesmoke" | "yellow" | "yellowgreen" | "ActiveBorder" | "ActiveCaption" | "AppWorkspace" | "Background" | "ButtonFace" | "ButtonHighlight" | "ButtonShadow" | "ButtonText" | "CaptionText" | "GrayText" | "Highlight" | "HighlightText" | "InactiveBorder" | "InactiveCaption" | "InactiveCaptionText" | "InfoBackground" | "InfoText" | "Menu" | "MenuText" | "Scrollbar" | "ThreeDDarkShadow" | "ThreeDFace" | "ThreeDHighlight" | "ThreeDLightShadow" | "ThreeDShadow" | "Window" | "WindowFrame" | "WindowText" | "currentcolor" | undefined;
                background: string;
                boxShadow: string;
                '&:hover': {
                    background: string;
                    boxShadow: string;
                };
            };
            outlinedPrimary: {
                color: string;
                backgroundColor: string;
                boxShadow: string;
                '&:hover': {
                    color: string;
                };
            };
            outlinedInfo: {
                color: string;
                backgroundColor: string;
                boxShadow: string;
                '&:hover': {
                    backgroundColor: string;
                    color: string;
                };
            };
            outlinedSuccess: {
                color: string;
                backgroundColor: string;
                '&:hover': {
                    color: string;
                    backgroundColor: string;
                    boxShadow: string;
                };
            };
            containedSuccess: {
                color: string;
                backgroundColor: string;
                '&:hover': {
                    backgroundColor: string;
                    boxShadow: string;
                };
            };
            containedWarning: {
                color: string;
                backgroundColor: string;
                '&:hover': {
                    backgroundColor: string;
                    boxShadow: string;
                };
            };
            containedInfo: {
                color: string;
                backgroundColor: string;
                '&:hover': {
                    backgroundColor: string;
                    boxShadow: string;
                };
            };
        };
    };
};
