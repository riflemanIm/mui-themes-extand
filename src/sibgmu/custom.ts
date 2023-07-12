import logoHero from "src/images/logo_hero_sibgmu.svg";
import LogoHeader from "src/images/logo_sibgmu.svg";
import heroImg from "src/images/heroImgPatientPimu.svg";
import logoOnly from "src/images/logo_sibgmu.svg";
// import profileBg from '../images/profile_bg.svg';
import alterDone from "src/images/appointment_done_pimu.svg";

import checkMark from "src/images/check_mark_pimu.svg";
import mmkNoRecords from "src/images/mmk_no_records.svg";
import alterCallDrDone from "src/images/call_dr_done_pimu.svg";
import AppStoreIcon from "src/images/appStore.svg";
import GooglePlayIcon from "src/images/googlePlay.svg";
import RuStoreIcon from "src/images/ruStoreBlack.svg";
import call from "src/images/call_doc_pimu.svg";
import phone from "src/images/call_pimu.svg";
import visit from "src/images/visit_pimu.svg";
import clinic from "src/images/clinic_pimu.svg";

const custom = {
  defTitle:
    "Клиники Сибирского Государственного Медицинского Университета в Томске",
  defDescr:
    "Медицинский комплекс клиник СибГМУ предоставляет полный спектр услуг по диагностике и лечению самых различных заболеваний. Это крупнейший клинический комплекс, медицинскую помощь в котором ежегодно получают более 20 тысяч пациентов из России и стран зарубежья.",
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
  defaultMapZoom: 13,
  availableLanguages: "RU,EN,FR",
  countryCode: "RU",
  phoneMask: "+7 (999) 999 9999",
  ambulancePhone: "+74957815577",
  ageLimitLow: -120,
  ageLimitHigh: -16,

  defaultSpecialization: "",
  firstButtons: { call, phone, visit, clinic },
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
