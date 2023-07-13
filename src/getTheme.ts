// import mobimed from "./mobimed";
// import drAnna from "./drAnna";
// import gms from "./gms";
// import gmswiget from "./gmswiget";
// import medincenter from "./medincenter";
// import medswiss from "./medswiss";
// import mediadoc from "./mediadoc";
// import minfin from "./minfin";
// import pimu from "./pimu";
// import ncn from "./ncn";
// import sibgmu from "./sibgmu";

// const customSettings = async () => {
//   const custom = (await import(`./${process.env.REACT_APP_THEME}`))
//     .default;

export default function getTheme(name?: string) {
  return async () => {
    return await import(`./${name}`);
  };

  // return name === "drAnna"
  //   ? drAnna
  //   : name === "gms"
  //   ? gms
  //   : name === "gmswiget"
  //   ? gmswiget
  //   : name === "medincenter"
  //   ? medincenter
  //   : name === "medswiss"
  //   ? medswiss
  //   : name === "mediadoc"
  //   ? mediadoc
  //   : name === "minfin"
  //   ? minfin
  //   : name === "pimu"
  //   ? pimu
  //   : name === "ncn"
  //   ? ncn
  //   : name === "sibgmu"
  //   ? sibgmu
  //   : mobimed;
}
