/// <reference types="react" />
import componentsOverride from './overrides';
declare const _default: {
    palette: {
        hero: string;
        primary: {
            lighter: string;
            main: string;
            light: string;
            dark: string;
            darker: string;
            contrastText: string;
        };
        secondary: {
            lighter: string;
            main: string;
            light: string;
            dark: string;
            contrastText: string;
            darker: string;
        };
        info: {
            lighter: string;
            main: string;
            light: string;
            dark: string;
            contrastText: string;
            darker: string;
        };
        success: {
            lighter: string;
            main: string;
            light: string;
            dark: string;
            contrastText: string;
            darker: string;
        };
        warning: {
            lighter: string;
            main: string;
            light: string;
            dark: string;
            darker: string;
            contrastText: string;
        };
        error: {
            lighter: string;
            main: string;
            light: string;
            dark: string;
            darker: string;
            contrastText: string;
        };
        grey: {
            0: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
            5008: string;
            50012: string;
            50016: string;
            50024: string;
            50032: string;
            50048: string;
            50056: string;
            50080: string;
        };
        gradients: {
            primary: string;
            info: string;
            success: string;
            warning: string;
            error: string;
            one: string;
            two: string;
        };
        divider: string;
        text: {
            primary: string;
            secondary: string;
            boby2: string;
            subtitle2: string;
            disabled: string;
        };
        background: {
            paper: string;
            default: string;
            neutral: string;
            warning: string;
            error: string;
            info: string;
            infoGadient: string;
            success: string;
        };
        action: {
            active: string;
            hover: string;
            selected: string;
            disabled: string;
            disabledBackground: string;
            focus: string;
            hoverOpacity: number;
            disabledOpacity: number;
            toggle1: string;
            toggle2: string;
            toggle3: string;
            toggle4: string;
        };
        sideBar: {
            color: string;
            colorLeft: string;
            colorHover: string;
            colorActive: string;
            bg: string;
        };
        baseButton: {
            bgColor: string;
            bgColorHover: string;
            shadow: string;
        };
        bgLight: {
            one: string;
            two: string;
            disabled: string;
        };
        shadows: {
            card: string;
            firstHover: string;
        };
    };
    typography: import("@mui/material").TypographyVariantsOptions;
    custom: {
        defTitle: string;
        defDescr: string;
        AppStoreIcon: import("react").FunctionComponent<import("react").SVGAttributes<SVGElement>>;
        GooglePlayIcon: import("react").FunctionComponent<import("react").SVGAttributes<SVGElement>>;
        RuStoreIcon: import("react").FunctionComponent<import("react").SVGAttributes<SVGElement>>;
        linkRuStore: string;
        linkGooglePlay: string;
        linkAppStore: string;
        logoHero: import("react").FunctionComponent<import("react").SVGAttributes<SVGElement>>;
        LogoHeader: import("react").FunctionComponent<import("react").SVGAttributes<SVGElement>>;
        heroImg: import("react").FunctionComponent<import("react").SVGAttributes<SVGElement>>;
        alterDone: import("react").FunctionComponent<import("react").SVGAttributes<SVGElement>>;
        alterCallDrDone: import("react").FunctionComponent<import("react").SVGAttributes<SVGElement>>;
        mmkNoRecords: import("react").FunctionComponent<import("react").SVGAttributes<SVGElement>>;
        checkMark: import("react").FunctionComponent<import("react").SVGAttributes<SVGElement>>;
        requireVisitCustomCheck: boolean;
        isFaqEnabled: boolean;
        defaultMapZoom: number;
        availableLanguages: string;
        countryCode: string;
        phoneMask: string;
        ambulancePhone: string;
        ageLimitLow: number;
        ageLimitHigh: number;
        defaultSpecialization: string;
        firstButtons: {
            phone: import("react").FunctionComponent<import("react").SVGAttributes<SVGElement>>;
            visit: import("react").FunctionComponent<import("react").SVGAttributes<SVGElement>>;
            clinic: import("react").FunctionComponent<import("react").SVGAttributes<SVGElement>>;
            ambulance: import("react").FunctionComponent<import("react").SVGAttributes<SVGElement>>;
        };
        showFastButtonsOnMainPage: boolean;
        showStoreLinks: boolean;
        isPaymentsEnabled: boolean;
        showLoginDoctorButton: boolean;
        showFavoriteDoctors: boolean;
        showDoctorsRating: boolean;
        authMenuItems: string[];
        showLanguageSwitch: boolean;
        filterWithPlanningOnly: boolean;
        filterWithTimeSlotsOnly: boolean;
        showFilterOnline: boolean;
        showChatWithOperator: boolean;
        isGetInvoicesLocal: boolean;
        showTimeSlotsCacheSwitch: boolean;
        showVisitPrice: boolean;
        unAuthMenuItems: string[];
        showQrCodeAuth: boolean;
        requireStartPageAuth: boolean;
        authIdentifiers: string;
        showEsiaAuth: boolean;
        showInsuranceDMS: boolean;
        showInsuranceOMS: boolean;
    };
    componentsOverride: typeof componentsOverride;
};
export default _default;
