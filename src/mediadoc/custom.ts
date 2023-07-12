import logoHero from "../images/logo_hero_mediadoc.svg";
import { ReactComponent as LogoHeader } from "../images/logo_mediadoc.svg";
import heroImg from "../images/heroImgPatient.svg";
import logoOnly from "../images/logo_only.svg";
// import profileBg from '../images/profile_bg.svg';
import alterDone from "../images/appointment_done.svg";

import checkMark from "../images/check_mark.svg";
import mmkNoRecords from "../images/mmk_no_records.svg";
import alterCallDrDone from "../images/call_dr_done.svg";
import { ReactComponent as AppStoreIcon } from "../images/appStore.svg";
import { ReactComponent as GooglePlayIcon } from "../images/googlePlay.svg";
import { ReactComponent as RuStoreIcon } from "../images/ruStoreBlack.svg";

//import call from '../images/call_doc.svg';
import favorites from "../images/favorites.svg";
import mmk from "../images/first_button_mmk.svg";
//import phone from '../images/call.svg';
import visit from "../images/visit.svg";
import clinic from "../images/clinic.svg";

const custom = {
  defTitle: "MediaDoc.net",
  defDescr: "MediaDoc.net - Votre mÃ©decin en ligne pour vous et votre famille",
  AppStoreIcon,
  GooglePlayIcon,
  RuStoreIcon,
  linkRuStore: "",
  linkGooglePlay:
    "https://play.google.com/store/apps/details?id=ru.postmodern.mobiapp.demo",
  linkAppStore: "https://testflight.apple.com/join/XJPwaqDO",

  logoHero,
  LogoHeader,
  logoOnly,
  heroImg,
  // profileBg,
  alterDone,
  alterCallDrDone,
  mmkNoRecords,
  checkMark,
  requireVisitCustomCheck: false,
  isFaqEnabled: false,
  defaultMapZoom: 5.7,
  availableLanguages: "EN,FR",
  countryCode: "FR",
  phoneMask: "+33 9 99 99 99 99",

  ambulancePhone: "+74957815577",
  ageLimitLow: -120,
  ageLimitHigh: -16,

  defaultSpecialization: "",
  firstButtons: { favorites, mmk, visit, clinic },
  showFastButtonsOnMainPage: false,

  showStoreLinks: true,

  isPaymentsEnabled: true,

  showLoginDoctorButton: false,
  showFavoriteDoctors: true,
  showDoctorsRating: true,
  authMenuItems: [
    "home",
    "events_and_visits",
    "mmk",
    "invoices",
    "directions",
    "drugs",
    "map",
  ],
  showLanguageSwitch: true,
  filterWithPlanningOnly: false,
  filterWithTimeSlotsOnly: true,
  showFilterOnline: true,
  showChatWithOperator: true,
  isGetInvoicesLocal: false,
  showTimeSlotsCacheSwitch: false,
  showVisitPrice: true,

  unAuthMenuItems: ["home", "map"],
  showQrCodeAuth: false,
  requireStartPageAuth: true,
  authIdentifiers: "both", //email | phone | both
  showEsiaAuth: false,
  showInsuranceDMS: false,
  showInsuranceOMS: false,
};
export default custom;
