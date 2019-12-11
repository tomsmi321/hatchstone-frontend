import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#326FBB',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contast with palette.primary.main
    },
    secondary: {
      // light: will be calculated from palette.primary.main,
      main: '#FBD700',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#FFFFFF',
    },
    // error: will us the default color
  },
});

export { theme, MuiThemeProvider };