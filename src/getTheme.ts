import mobimed from './mobimed';
import drAnna from './drAnna';
import gms from './gms';
import medincenter from './medincenter';
import medswiss from './medswiss';
import mediadoc from './mediadoc';
import minfin from './minfin';
import pimu from './pimu';
import ncn from './ncn';
import sibgmu from './sibgmu';

export default function getTheme() {
  return process.env.REACT_APP_THEME === 'drAnna'
    ? drAnna
    : process.env.REACT_APP_THEME === 'gms'
    ? gms
    : process.env.REACT_APP_THEME === 'medincenter'
    ? medincenter
    : process.env.REACT_APP_THEME === 'medswiss'
    ? medswiss
    : process.env.REACT_APP_THEME === 'mediadoc'
    ? mediadoc
    : process.env.REACT_APP_THEME === 'minfin'
    ? minfin
    : process.env.REACT_APP_THEME === 'pimu'
    ? pimu
    : process.env.REACT_APP_THEME === 'ncn'
    ? ncn
    : process.env.REACT_APP_THEME === 'sibgmu'
    ? sibgmu
    : mobimed;
}
