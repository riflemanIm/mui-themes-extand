import logoHero from '../../images/logo_hero_sibgmu.svg';
import { ReactComponent as LogoHeader } from '../../images/logo_sibgmu.svg';
import heroImg from '../../images/heroImgPatientPimu.svg';
import logoOnly from '../../images/logo_sibgmu.svg';
// import profileBg from '../../images/profile_bg.svg';
import alterDone from '../../images/appointment_done_pimu.svg';

import checkMark from '../../images/check_mark_pimu.svg';
import mmkNoRecords from '../../images/mmk_no_records.svg';
import alterCallDrDone from '../../images/call_dr_done_pimu.svg';
import { ReactComponent as AppStoreIcon } from '../../images/appStore.svg';
import { ReactComponent as GooglePlayIcon } from '../../images/googlePlay.svg';
import { ReactComponent as RuStoreIcon } from '../../images/ruStoreBlack.svg';
import call from '../../images/call_doc_pimu.svg';
import phone from '../../images/call_pimu.svg';
import visit from '../../images/visit_pimu.svg';
import clinic from '../../images/clinic_pimu.svg';

const custom = {
  defTitle:
    'Клиники Сибирского Государственного Медицинского Университета в Томске',
  defDescr:
    'Медицинский комплекс клиник СибГМУ предоставляет полный спектр услуг по диагностике и лечению самых различных заболеваний. Это крупнейший клинический комплекс, медицинскую помощь в котором ежегодно получают более 20 тысяч пациентов из России и стран зарубежья.',
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
  defaultMapZoom: 13,
  availableLanguages: 'RU,EN,FR',
  countryCode: 'RU',
  phoneMask: '+7 (999) 999 9999',
  ambulancePhone: '+74957815577',
  ageLimitLow: -120,
  ageLimitHigh: -16,

  defaultSpecialization: '',
  firstButtons: { call, phone, visit, clinic },
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
  showLanguageSwitch: true,
  filterWithPlanningOnly: false,
  filterWithTimeSlotsOnly: true,
  showFilterOnline: true,
  showChatWithOperator: false,
  isGetInvoicesLocal: false,
  showTimeSlotsCacheSwitch: false,
  showVisitPrice: true,

  unAuthMenuItems: ['home', 'map'],
  showQrCodeAuth: false,
  requireStartPageAuth: false,
  authIdentifiers: 'both', //email | phone | both
  showEsiaAuth: false,
  showInsuranceDMS: true,
  showInsuranceOMS: true,
};
export default custom;
