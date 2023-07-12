import logoHero from "src/images/logo_hero_mediadoc.svg";
import LogoHeader from "src/images/logo_mediadoc.svg";
import heroImg from "src/images/heroImgPatient.svg";
import logoOnly from "src/images/logo_only.svg";
// import profileBg from '../images/profile_bg.svg';
import alterDone from "src/images/appointment_done.svg";

import checkMark from "src/images/check_mark.svg";
import mmkNoRecords from "src/images/mmk_no_records.svg";
import alterCallDrDone from "src/images/call_dr_done.svg";
import AppStoreIcon from "src/images/appStore.svg";
import GooglePlayIcon from "src/images/googlePlay.svg";
import RuStoreIcon from "src/images/ruStoreBlack.svg";

//import call from '../images/call_doc.svg';
import favorites from "src/images/favorites.svg";
import mmk from "src/images/first_button_mmk.svg";
//import phone from '../images/call.svg';
import visit from "src/images/visit.svg";
import clinic from "src/images/clinic.svg";

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
