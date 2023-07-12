import logoHero from "src/images/logo_hero_pimu.svg";
import LogoHeader from "src/images/logo_pimu.svg";
import heroImg from "src/images/heroImgPatientPimu.svg";
import logoOnly from "src/images/logo_only_pimu.svg";
// import profileBg from '../images/profile_bg.svg';
import alterDone from "src/images/appointment_done_pimu.svg";

import checkMark from "src/images/check_mark_pimu.svg";
import mmkNoRecords from "src/images/mmk_no_records_pimu.svg";
import alterCallDrDone from "src/images/call_dr_done_pimu.svg";
import AppStoreIcon from "src/images/appStore.svg";
import GooglePlayIcon from "src/images/googlePlay.svg";
import RuStoreIcon from "src/images/ruStoreBlack.svg";
//import call from '../images/call_doc_pimu.svg';
import phone from "src/images/call_pimu.svg";
import visit from "src/images/visit_pimu.svg";
import clinic from "src/images/clinic_pimu.svg";

const custom = {
  defTitle: "ПИМУ - Приволжский исследовательский медицинский университет",
  defDescr: "ПИМУ - Приволжский исследовательский медицинский университет",
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
  defaultMapZoom: 10,
  availableLanguages: "RU,EN,FR",
  countryCode: "RU",
  phoneMask: "+7 (999) 999 9999",
  ambulancePhone: "+74957815577",
  ageLimitLow: -120,
  ageLimitHigh: -16,

  defaultSpecialization: "",
  firstButtons: { phone, visit, clinic },
  showFastButtonsOnMainPage: true,

  showStoreLinks: false,

  isPaymentsEnabled: true,

  showLoginDoctorButton: false,
  showFavoriteDoctors: true,
  showDoctorsRating: false,
  authMenuItems: ["home", "events_and_visits", "mmk", "invoices", "map"],
  showLanguageSwitch: true,
  filterWithPlanningOnly: false,
  filterWithTimeSlotsOnly: true,
  showFilterOnline: true,
  showChatWithOperator: false,
  isGetInvoicesLocal: false,
  showTimeSlotsCacheSwitch: false,
  showVisitPrice: true,

  unAuthMenuItems: ["home", "map"],
  showQrCodeAuth: false,
  requireStartPageAuth: false,
  authIdentifiers: "both", //email | phone | both
  showEsiaAuth: false,
  showInsuranceDMS: true,
  showInsuranceOMS: true,
};
export default custom;
