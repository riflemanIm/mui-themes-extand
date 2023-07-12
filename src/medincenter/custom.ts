import logoHero from "src/images/logo_hero_medincenter.svg";
import LogoHeader from "src/images/logo_header_medincenter.svg";
import heroImg from "src/images/heroImgPatientMedinCenter.svg";
import logoOnly from "src/images/logo_only_medincenter.svg";
// import profileBg from '../images/profile_bg.svg';
import alterDone from "src/images/appointment_done_medincenter.svg";
import AppStoreIcon from "src/images/appStoreBlack.svg";
import GooglePlayIcon from "src/images/googlePlayBlack.svg";
import RuStoreIcon from "src/images/ruStoreBlack.svg";

import checkMark from "src/images/check_mark_medin.svg";
import mmkNoRecords from "src/images/mmk_no_records_medin.svg";
import alterCallDrDone from "src/images/call_dr_done.svg";
import call from "src/images/call_doc.svg";
//import covid from '../images/covid.svg';
import phone from "src/images/call.svg";
import visit from "src/images/visit.svg";
import clinic from "src/images/clinic.svg";

const custom = {
  defTitle: "Мединцентр",
  defDescr: "Мединцентр - портал для Вашей семьи",
  AppStoreIcon,
  GooglePlayIcon,
  RuStoreIcon,
  linkRuStore: "https://apps.rustore.ru/app/ru.medin.mobiapp",
  linkGooglePlay:
    "https://play.google.com/store/apps/details?id=ru.medin.mobiapp&pli=1",
  linkAppStore:
    "https://apps.apple.com/us/app/%D0%BC%D0%B5%D0%B4%D0%B8%D0%BD%D1%86%D0%B5%D0%BD%D1%82%D1%80/id1631548091",

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

  showStoreLinks: true,

  isPaymentsEnabled: true,

  showLoginDoctorButton: false,
  showFavoriteDoctors: true,
  showDoctorsRating: false,
  authMenuItems: ["home", "events_and_visits", "mmk", "invoices", "map"],
  showLanguageSwitch: false,
  filterWithPlanningOnly: false,
  filterWithTimeSlotsOnly: false,
  showFilterOnline: false,
  showChatWithOperator: false,
  isGetInvoicesLocal: false,
  showTimeSlotsCacheSwitch: false,
  showVisitPrice: true,

  unAuthMenuItems: ["home", "map"],
  showQrCodeAuth: false,
  requireStartPageAuth: true,
  authIdentifiers: "email", //email | phone | both
  showEsiaAuth: false,
  showInsuranceDMS: false,
  showInsuranceOMS: false,
};
export default custom;
