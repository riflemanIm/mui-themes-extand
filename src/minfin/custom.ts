import logoHero from '../../images/logo_hero_minfin.svg';
import { ReactComponent as LogoHeader } from '../../images/logo_minfin.svg';
import heroImg from '../../images/heroImgPatientMinfin.svg';
import logoOnly from '../../images/logo_only_minfin.svg';
// import profileBg from '../../images/profile_bg.svg';
import alterDone from '../../images/appointment_done_minfin.svg';
import checkMark from '../../images/check_mark_minfin.svg';
import mmkNoRecords from '../../images/mmk_no_records_minfin.svg';
import alterCallDrDone from '../../images/call_dr_done_minfin.svg';
import { ReactComponent as AppStoreIcon } from '../../images/appStoreBlack.svg';
import { ReactComponent as GooglePlayIcon } from '../../images/googlePlayBlack.svg';
import { ReactComponent as RuStoreIcon } from '../../images/ruStoreBlack.svg';

//import call from '../../images/call_doc_minfin.svg';
import phone from '../../images/call_minfin.svg';
import visit from '../../images/visit_minfin.svg';
import clinic from '../../images/clinic_minfin.svg';

const custom = {
  defTitle: 'ФГБУ «МФК Минфина России»',
  defDescr:
    'Медицинский центр  Многофункциональный комплекс Министерства финансов Российской Федерации - Запись  on-line',
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
  ageLimitHigh: -18,

  defaultSpecialization: '',
  firstButtons: { phone, visit, clinic },
  showFastButtonsOnMainPage: true,

  showStoreLinks: false,

  isPaymentsEnabled: true,

  showLoginDoctorButton: false,
  showFavoriteDoctors: true,
  showDoctorsRating: false,
  authMenuItems: [
    'home',
    'events_and_visits',
    'mmk',
    'invoices',
    'map',
  ],
  showLanguageSwitch: false,
  filterWithPlanningOnly: false,
  filterWithTimeSlotsOnly: false,
  showFilterOnline: true,
  showChatWithOperator: false,
  isGetInvoicesLocal: false,
  showTimeSlotsCacheSwitch: false,
  showVisitPrice: true,

  unAuthMenuItems: ['home', 'map'],
  showQrCodeAuth: false,
  requireStartPageAuth: false,
  authIdentifiers: 'email', //email | phone | both
  showEsiaAuth: false,
  showInsuranceDMS: false,
  showInsuranceOMS: false,
};
export default custom;
