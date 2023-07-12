import logoHero from '../../images/logo_hero_medswiss.svg';
import { ReactComponent as LogoHeader } from '../../images/logo_medswiss.svg';
import heroImg from '../../images/heroImgPatient.svg';
import logoOnly from '../../images/logo_only_medswiss.svg';
// import profileBg from '../../images/profile_bg.svg';
import alterDone from '../../images/appointment_done.svg';
import config from '../../config';
import { ReactComponent as AppStoreIcon } from '../../images/appStore.svg';
import { ReactComponent as GooglePlayIcon } from '../../images/googlePlay.svg';
import { ReactComponent as RuStoreIcon } from '../../images/ruStoreBlack.svg';

import checkMark from '../../images/check_mark_medswiss.svg';
import mmkNoRecords from '../../images/mmk_no_records_medswiss.svg';
import alterCallDrDone from '../../images/call_dr_done.svg';
import call from '../../images/call_doc.svg';
//import covid from '../../images/covid.svg';
import phone from '../../images/call.svg';
import visit from '../../images/visit.svg';
import clinic from '../../images/clinic.svg';

const custom = {
  defTitle: `MedSwiss.${config.defLang}`,
  defDescr: `MedSwiss.${config.defLang} - для Вас и Вашей семьи`,
  AppStoreIcon,
  GooglePlayIcon,
  RuStoreIcon,
  linkRuStore: '',
  linkGooglePlay:
    'https://play.google.com/store/apps/dev?id=5616422839038961125',
  linkAppStore: 'https://apps.apple.com/ru/app/medswiss/id1643690262',

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
  showFastButtonsOnMainPage: true,

  showStoreLinks: true,

  isPaymentsEnabled: false,

  showLoginDoctorButton: false,
  showFavoriteDoctors: true,
  showDoctorsRating: false,
  authMenuItems: ['home', 'events_and_visits', 'mmk', 'map'],
  showLanguageSwitch: false,
  filterWithPlanningOnly: false,
  filterWithTimeSlotsOnly: true,
  showFilterOnline: false,
  showChatWithOperator: false,
  isGetInvoicesLocal: false,
  showTimeSlotsCacheSwitch: false,
  showVisitPrice: true,

  unAuthMenuItems: ['home', 'map'],
  showQrCodeAuth: false,
  requireStartPageAuth: true,
  authIdentifiers: 'both', //email | phone | both
  showEsiaAuth: false,
  showInsuranceDMS: true,
  showInsuranceOMS: false,
};
export default custom;
