//

import Card from './Card';
import Paper from './Paper';
import Input from './Input';
import Button from './Button';
import Tooltip from './Tooltip';
import Backdrop from './Backdrop';
import Typography from './Typography';
import CssBaseline from './CssBaseline';
import Autocomplete from './Autocomplete';
import ToggleButton from './ToggleButton';
import AppBar from './AppBar';
import IconButton from './IconButton';
import Picker from './Picker';
import Rating from './Rating';
import Menu from './Menu';
import Alert from './Alert';
import Link from './Link';
import Badge from './Badge';
// ----------------------------------------------------------------------

import { Theme } from '@mui/material/styles';

export default function ComponentsOverrides(theme: Theme) {
  return Object.assign(
    AppBar(theme),
    Card(theme),
    Input(theme),
    Paper(theme),
    Button(theme),
    Tooltip(theme),
    Backdrop(theme),
    Typography(theme),
    CssBaseline(),
    Autocomplete(theme),
    ToggleButton(theme),
    IconButton(theme),
    Picker(),
    Rating(theme),
    Menu(),
    Alert(theme),
    Link(),
    Badge(),
  );
}
