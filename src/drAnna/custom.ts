import logoHero from "src/images/logo_hero_drAnna.svg";
import LogoHeader from "src/images/logo_drAnna.svg";
import heroImg from "src/images/heroImgPatientDrAnna.svg";
import logoOnly from "src/images/logo_only_dr_anna.svg";
// import profileBg from '../images/profile_bg_dr_anna.svg';
import alterDone from "src/images/appointment_done_dr_anna.svg";
import AppStoreIcon from "src/images/appStore.svg";
import GooglePlayIcon from "src/images/googlePlay.svg";
import RuStoreIcon from "src/images/ruStoreBlack.svg";

import checkMark from "src/images/check_mark_dr_anna.svg";
import mmkNoRecords from "src/images/mmk_no_records_dr_anna.svg";
import alterCallDrDone from "src/images/call_dr_done.svg";
import call from "src/images/call_doc.svg";
//import covid from '../images/covid.svg';
import phone from "src/images/call.svg";
import visit from "src/images/visit.svg";
import clinic from "src/images/clinic.svg";

const custom = {
  defTitle: `Доктор Анна `,
  defDescr: `Доктор Анна - семейный доктор`,
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
  firstButtons: { call, phone, visit, clinic },
  showFastButtonsOnMainPage: false,

  showStoreLinks: false,

  isPaymentsEnabled: false,

  showLoginDoctorButton: false,
  showFavoriteDoctors: true,
  showDoctorsRating: false,
  //  authMenuItems: ['home', 'events_and_visits', 'mmk', 'map']
  authMenuItems: ["home", "events_and_visits", "mmk", "map"],

  showLanguageSwitch: false,
  filterWithPlanningOnly: false,
  filterWithTimeSlotsOnly: false,
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
