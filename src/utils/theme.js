import {createMuiTheme} from '@material-ui/core/styles';

let darkTheme = {
  palette: {
    type: 'dark',
  },
  typography: {
    useNextVariants: true,
  },
};

let lightTheme = {
  palette: {
    type: 'light',
  },
  typography: {
    useNextVariants: true,
  },
};

const getLightTheme = createMuiTheme (lightTheme);
const getDarkTheme = createMuiTheme (darkTheme);

export {getLightTheme, getDarkTheme};
