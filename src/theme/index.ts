import { createGlobalStyle } from 'styled-components';
import colors from "./colors.json";


export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.background.base};
    color: ${({ theme }) => theme.content.base};
  }

  html,
  body {
    padding: 0;
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
// The Colors the app
type Color = {
  lighter: string,
  base: string,
  darker: string
}

interface Theme {
  // Standard colors
  background: Color,
  primary: Color,
  secondary: Color,
  accent: Color,

  content: Color,

  // Contextual colors
  alert: Color,
  success: Color,
  error: Color,

}

const commonTheme = {
  primary: {
    base: colors.purple[5],
    lighter: colors.purple[3],
    darker: colors.purple[7],
  },
  secondary: {
    base: colors.blue[2],
    lighter: colors.blue[0],
    darker: colors.blue[4],
  },
  accent: {
    base: colors.coral[4],
    lighter:colors.coral[3], 
    darker: colors.coral[5],
  },
  alert: {
    base: colors.orange[4],
    darker: colors.orange[6],
    lighter: colors.orange[2]
  },
  success: {
    base: colors.green[2],
    lighter: colors.green[0],
    darker: colors.green[4],
  },
  error: {
    base: colors.red[5],
    lighter: colors.red[3],
    darker: colors.red[6],
  }
}

export const lightTheme: Theme = {
  background: {
    base: colors.white[1],
    lighter: colors.white[0],
    darker:colors.white[2]
  },
  content: {
    base: colors.black[1],
    lighter: colors.black[0],
    darker: colors.black[2],
  },
  ...commonTheme,
};

export const darkTheme: Theme = {
  content: {
    base: colors.white[1],
    lighter: colors.white[0],
    darker:colors.white[2]
  },
  background: {
    base: colors.black[1],
    lighter: colors.black[0],
    darker: colors.black[2],
  },

  ...commonTheme,
}

export default Theme;