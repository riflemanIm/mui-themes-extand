import logoHero from "src/images/logo_hero_mobimed.svg";
import LogoHeader from "src/images/logo_mobimed.svg";
import heroImg from "src/images/heroImgPatient.svg";
import logoOnly from "src/images/logo_only.svg";
// import profileBg from 'src/images/profile_bg.svg';
import alterDone from "src/images/appointment_done.svg";
import AppStoreIcon from "src/images/appStore.svg";
import GooglePlayIcon from "src/images/googlePlay.svg";
import RuStoreIcon from "src/images/ruStore.svg";

import checkMark from "src/images/check_mark.svg";
import mmkNoRecords from "src/images/mmk_no_records.svg";

import alterCallDrDone from "src/images/call_dr_done.svg";

import call from "src/images/call_doc.svg";
//import covid from 'src/images/covid.svg';
import phone from "src/images/call.svg";
import visit from "src/images/visit.svg";
import clinic from "src/images/clinic.svg";

const custom = {
  defTitle: `MobiMed `,
  defDescr: `Портал MobiMed - MobiMed.ru для Вас и Вашей семьи`,
  AppStoreIcon,
  GooglePlayIcon,
  RuStoreIcon,
  linkRuStore: "https://apps.rustore.ru/app/ru.medin.mobiapp",
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
  showFastButtonsOnMainPage: true, // appInfo

  showStoreLinks: true, // appInfo

  isPaymentsEnabled: true, // appInfo

  showLoginDoctorButton: true,
  showFavoriteDoctors: true, // appInfo
  showDoctorsRating: true, // appInfo
  authMenuItems: [
    "home",
    "events_and_visits",
    "mmk",
    "invoices",
    "directions",
    "drugs",
    "map"
  ],
  showLanguageSwitch: true, // appInfo
  filterWithPlanningOnly: false, // appInfo
  filterWithTimeSlotsOnly: true,
  showFilterOnline: true, // appInfo
  showChatWithOperator: true, // appInfo
  isGetInvoicesLocal: true,
  showTimeSlotsCacheSwitch: true, // appInfo
  showVisitPrice: true, // appInfo

  unAuthMenuItems: ["home", "map"],
  showQrCodeAuth: true, // appInfo
  requireStartPageAuth: false, // appInfo
  authIdentifiers: "both", //  appInfo (email | phone | both)
  showEsiaAuth: true, // appInfo
  showInsuranceDMS: true, // appInfo
  showInsuranceOMS: true // appInfo
};
export default custom;
