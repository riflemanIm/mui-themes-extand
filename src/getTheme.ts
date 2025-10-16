import celt from "./celt";
import drAnna from "./drAnna";
import gms from "./gms";
import kalinchenko from "./kalinchenko";
import mediadoc from "./mediadoc";
import medincenter from "./medincenter";
import medincenterOld from "./medincenter_old";
import medswiss from "./medswiss";
import minfin from "./minfin";
import mobimed from "./mobimed";
import mositalmed from "./mositalmed";
import ncn from "./ncn";
import pimu from "./pimu";
import sibgmu from "./sibgmu";
import skyfert from "./skyfert";
import sm from "./sm";
import testTheme from "./test";
import vetcenter from "./vetcenter";
import white_fang from "./white_fang";

export const THEME_REGISTRY = {
  mobimed,
  drAnna,
  gms,
  medincenter,
  medswiss,
  mediadoc,
  minfin,
  pimu,
  ncn,
  sibgmu,
  mositalmed,
  skyfert,
  white_fang,
  kalinchenko,
  celt,
  vetcenter,
  sm,
  medincenter_old: medincenterOld,
  test: testTheme,
} as const;

export type ThemeName = keyof typeof THEME_REGISTRY;
export type ThemeConfig = (typeof THEME_REGISTRY)[ThemeName];

export const DEFAULT_THEME_NAME: ThemeName = "mobimed";
export const THEME_NAMES = Object.keys(
  THEME_REGISTRY,
) as ThemeName[];

export function isThemeName(value: string): value is ThemeName {
  return Object.hasOwn(THEME_REGISTRY, value);
}

const FALLBACK_THEME = THEME_REGISTRY[DEFAULT_THEME_NAME];

export default function getTheme(name?: ThemeName | string): ThemeConfig {
  if (name && isThemeName(name)) {
    return THEME_REGISTRY[name];
  }
  return FALLBACK_THEME;
}
