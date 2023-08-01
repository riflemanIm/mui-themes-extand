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

export default function getTheme(name?: string) {
  console.log("name", name);
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
    : mobimed;
}
