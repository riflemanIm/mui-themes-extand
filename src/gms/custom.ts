import logoHero from '../../images/logo_hero_gsm.svg';
import { ReactComponent as LogoHeader } from '../../images/logo_gsm.svg';
import heroImg from '../../images/heroImgPatientGsm.svg';
import logoOnly from '../../images/logo_only_gms.png';
// import profileBg from '../../images/profile_bg.svg';
import alterDone from '../../images/appointment_done_gms.svg';
import { ReactComponent as AppStoreIcon } from '../../images/appStore.svg';
import { ReactComponent as GooglePlayIcon } from '../../images/googlePlay.svg';
import { ReactComponent as RuStoreIcon } from '../../images/ruStoreBlack.svg';

import checkMark from '../../images/check_mark_gms.svg';
import mmkNoRecords from '../../images/mmk_no_records_gms.svg';
import alterCallDrDone from '../../images/call_dr_done.svg';
import ambulance from '../../images/call_doc_gms.svg';
//import covid from '../../images/covid.svg';
import phone from '../../images/call_gms.svg';
import visit from '../../images/visit_gms.svg';
import clinic from '../../images/clinic_gms.svg';

const custom = {
  defTitle: 'GMS',
  defDescr: 'GMS - семейный доктор',
  AppStoreIcon,
  GooglePlayIcon,

  RuStoreIcon,
  linkRuStore: '',
  linkGooglePlay:
    'https://play.google.com/store/apps/details?id=ru.gmsclinic.mobiapp',
  linkAppStore:
    'https://apps.apple.com/us/app/gms-clinic-%D0%BB%D0%B8%D1%87%D0%BD%D1%8B%D0%B9-%D0%BA%D0%B0%D0%B1%D0%B8%D0%BD%D0%B5%D1%82/id1617597213',

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
  availableLanguages: 'RU,EN,FR',
  countryCode: 'RU',
  phoneMask: '+7 (999) 999 9999',
  ambulancePhone: '+74957815577',
  ageLimitLow: -120,
  ageLimitHigh: -16,

  defaultSpecialization: '',
  firstButtons: { phone, visit, clinic, ambulance },
  showFastButtonsOnMainPage: true,

  showStoreLinks: true,

  isPaymentsEnabled: false,

  showLoginDoctorButton: false,
  showFavoriteDoctors: true,
  showDoctorsRating: false,
  authMenuItems: ['home', 'events_and_visits', 'mmk', 'map'],
  showLanguageSwitch: false,
  filterWithPlanningOnly: true,
  filterWithTimeSlotsOnly: false,
  showFilterOnline: false,
  showChatWithOperator: false,
  isGetInvoicesLocal: false,
  showTimeSlotsCacheSwitch: false,
  showVisitPrice: false,

  unAuthMenuItems: ['home', 'map'],
  showQrCodeAuth: false,
  requireStartPageAuth: true,
  authIdentifiers: 'both', //email | phone | both
  showEsiaAuth: false,
  showInsuranceDMS: false,
  showInsuranceOMS: false,
};
export default custom;
