import { createUseStyles } from 'react-jss';

export const SpacerStyles = createUseStyles({
  h1: {
    height: '1rem',
  },
  h1half: {
    height: '1.5rem',
  },
  h2: {
    height: '2rem',
  },
  h4: {
    height: '4rem',
  },
  h6: {
    height: '6rem',
  },
  h8: {
    height: '8rem',
  },
  h10: {
    height: '10rem',
  },
});

export const BackgroundStyles = createUseStyles({
  bgDark: {
    backgroundColor: '#212529',
  },
});

export const FontStyles = createUseStyles({
  roboto: {
    fontFamily: ['Roboto', 'sans-serif'],
  },
  libreBaskerville: {
    fontFamily: ['Libre Baskerville', 'serif'],
  },
  lato: {
    fontFamily: ['Lato', 'sans-serif'],
  },
});
