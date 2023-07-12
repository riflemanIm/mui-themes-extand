import logoHero from '../../images/logo_hero_mobimed.svg';
import { ReactComponent as LogoHeader } from '../../images/logo_mobimed.svg';
import heroImg from '../../images/heroImgPatient.svg';
import logoOnly from '../../images/logo_only.svg';
// import profileBg from '../../images/profile_bg.svg';
import alterDone from '../../images/appointment_done.svg';
import { ReactComponent as AppStoreIcon } from '../../images/appStore.svg';
import { ReactComponent as GooglePlayIcon } from '../../images/googlePlay.svg';
import { ReactComponent as RuStoreIcon } from '../../images/ruStore.svg';

import config from '../../config';
import checkMark from '../../images/check_mark.svg';
import mmkNoRecords from '../../images/mmk_no_records.svg';

import alterCallDrDone from '../../images/call_dr_done.svg';

import call from '../../images/call_doc.svg';
//import covid from '../../images/covid.svg';
import phone from '../../images/call.svg';
import visit from '../../images/visit.svg';
import clinic from '../../images/clinic.svg';

const custom = {
  defTitle: `MobiMed.${config.defLang}`,
  defDescr: `Портал MobiMed.${config.defLang} - MobiMed.ru для Вас и Вашей семьи`,
  AppStoreIcon,
  GooglePlayIcon,
  RuStoreIcon,
  linkRuStore: 'https://apps.rustore.ru/app/ru.medin.mobiapp',
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
  showFastButtonsOnMainPage: true, // appInfo

  showStoreLinks: true, // appInfo

  isPaymentsEnabled: true, // appInfo

  showLoginDoctorButton: true,
  showFavoriteDoctors: true, // appInfo
  showDoctorsRating: true, // appInfo
  authMenuItems: [
    'home',
    'events_and_visits',
    'mmk',
    'invoices',
    'directions',
    'drugs',
    'map',
  ],
  showLanguageSwitch: true, // appInfo
  filterWithPlanningOnly: false, // appInfo
  filterWithTimeSlotsOnly: true,
  showFilterOnline: true, // appInfo
  showChatWithOperator: true, // appInfo
  isGetInvoicesLocal: true,
  showTimeSlotsCacheSwitch: true, // appInfo
  showVisitPrice: true, // appInfo

  unAuthMenuItems: ['home', 'map'],
  showQrCodeAuth: true, // appInfo
  requireStartPageAuth: false, // appInfo
  authIdentifiers: 'both', //  appInfo (email | phone | both)
  showEsiaAuth: true, // appInfo
  showInsuranceDMS: true, // appInfo
  showInsuranceOMS: true, // appInfo
};
export default custom;
