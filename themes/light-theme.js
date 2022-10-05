import createTheme from "@mui/material/styles/createTheme";
import { responsiveFontSizes as responsiveFonts } from "@mui/material/styles";

const baseThemeOptions = {
  palette: {
    mode: "light",
  },
  direction: "ltr",
};

const lightTheme = createTheme({
  palette: {
    mode: "light",
    direction: "ltr",
  },
});

export default lightTheme;

/**
 *
 * @param direction{String}
 * @param responsiveFontSizes{boolean}
 */
export const createCustomTheme = ({ direction, responsiveFontSizes }) => {
  console.log("dirrection = " + direction);
  if (direction !== "rtl" && direction !== "ltr") direction = "ltr";
  console.log("dirrection2 = " + direction);
  let theme = createTheme({ baseThemeOptions, direction: direction });

  if (responsiveFontSizes) {
    theme = responsiveFonts(theme);
  }
  console.log("direction in created theme = " + theme.direction);
  return theme;
};
