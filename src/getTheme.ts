import mobimed from "./mobimed";
import drAnna from "./drAnna";
import gms from "./gms";
import medincenter from "./medincenter";
import medswiss from "./medswiss";
import mediadoc from "./mediadoc";
import minfin from "./minfin";
import pimu from "./pimu";
import ncn from "./ncn";
import sibgmu from "./sibgmu";
import mositalmed from "./mositalmed";
import skyfert from "./skyfert";
import white_fang from "./white_fang";
import kalinchenko from "./kalinchenko";
import celt from "./celt";

export default function getTheme(name?: string) {
  //console.log('name', name);
  return name === "drAnna"
    ? drAnna
    : name === "gms"
    ? gms
    : name === "medincenter"
    ? medincenter
    : name === "medswiss"
    ? medswiss
    : name === "mediadoc"
    ? mediadoc
    : name === "minfin"
    ? minfin
    : name === "pimu"
    ? pimu
    : name === "ncn"
    ? ncn
    : name === "sibgmu"
    ? sibgmu
    : name === "mositalmed"
    ? mositalmed
    : name === "skyfert"
    ? skyfert
    : name === "white_fang"
    ? white_fang
    : name === "kalinchenko"
    ? kalinchenko
    : name === "celt"
    ? celt
    : mobimed;
}
