import logoHero from '../../images/logo_hero_drAnna.svg';
import { ReactComponent as LogoHeader } from '../../images/logo_drAnna.svg';
import heroImg from '../../images/heroImgPatientDrAnna.svg';
import logoOnly from '../../images/logo_only_dr_anna.svg';
// import profileBg from '../../images/profile_bg_dr_anna.svg';
import alterDone from '../../images/appointment_done_dr_anna.svg';
import { ReactComponent as AppStoreIcon } from '../../images/appStore.svg';
import { ReactComponent as GooglePlayIcon } from '../../images/googlePlay.svg';
import { ReactComponent as RuStoreIcon } from '../../images/ruStoreBlack.svg';

import checkMark from '../../images/check_mark_dr_anna.svg';
import mmkNoRecords from '../../images/mmk_no_records_dr_anna.svg';
import alterCallDrDone from '../../images/call_dr_done.svg';
import call from '../../images/call_doc.svg';
//import covid from '../../images/covid.svg';
import phone from '../../images/call.svg';
import visit from '../../images/visit.svg';
import clinic from '../../images/clinic.svg';

const custom = {
  defTitle: `Доктор Анна `,
  defDescr: `Доктор Анна - семейный доктор`,
  AppStoreIcon,
  GooglePlayIcon,
  RuStoreIcon,
  linkRuStore: '',
  linkGooglePlay:
    'https://play.google.com/store/apps/details?id=ru.postmodern.mobiapp.demo',
  linkAppStore: 'https://testflight.apple.com/join/XJPwaqDO',
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
  firstButtons: { call, phone, visit, clinic },
  showFastButtonsOnMainPage: false,

  showStoreLinks: false,

  isPaymentsEnabled: false,

  showLoginDoctorButton: false,
  showFavoriteDoctors: true,
  showDoctorsRating: false,
  //  authMenuItems: ['home', 'events_and_visits', 'mmk', 'map']
  authMenuItems: ['home', 'events_and_visits', 'mmk', 'map'],

  showLanguageSwitch: false,
  filterWithPlanningOnly: false,
  filterWithTimeSlotsOnly: false,
  showFilterOnline: true,
  showChatWithOperator: true,
  isGetInvoicesLocal: false,
  showTimeSlotsCacheSwitch: false,
  showVisitPrice: true,

  unAuthMenuItems: ['home', 'map'],
  showQrCodeAuth: false,
  requireStartPageAuth: true,
  authIdentifiers: 'both', //email | phone | both
  showEsiaAuth: false,
  showInsuranceDMS: false,
  showInsuranceOMS: false,
};
export default custom;
