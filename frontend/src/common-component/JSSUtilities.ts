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

export const FormStyles = createUseStyles({
  formTextClass: {
    color: 'white',
    fontSize: '1.5rem',
    fontWeight: 300,
  },
  formControlClass: {
    backgroundColor: '#212529',
    width: '100%',
    color: '#CFCFCF',
    borderColor: '#CFCFCF',
    fontSize: '1rem',
    padding: '0.8rem 1rem 0.8rem 1rem',
    '&:focus': {
      color: 'white',
      backgroundColor: '#212529',
    },
  },
  formButton: {
    fontSize: '1.3rem',
    fontFamily: ['Roboto', 'sans-serif'],
  },
  formClass: {
    width: '40%',
  },
});
