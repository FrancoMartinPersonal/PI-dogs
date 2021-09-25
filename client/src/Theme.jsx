import { ThemeProvider } from 'styled-components';

const theme = {
  colour: {
    primary:{
      light:"#8869a1b5",
      main:"#35095a",
      dark:"#261435",
    },
    secondary:{
      light:"#cec678",
      main:"#fbe400",
      dark:"#ad9f04",
    },
    background:"#dde",
    //background: 'radial-gradient(circle, rgba(101,31,98,0.2518662464985995) 0%, rgba(135,128,19,0.2526505602240896) 100%)',
    link: '#9AB87A',
  },
  font: {
    size: {
      extraSmall: '14px',
      small: '16px',
      medium: '18px',
      large: '20px',
      extraLarge: '24px',
    },
    family: 'sans-serif',
  },
  breakpoint: {
    mobile: '375px',
    tablet: '600px',
    laptop: '1200px',
    desktop: '1600px',
  },
};

const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;