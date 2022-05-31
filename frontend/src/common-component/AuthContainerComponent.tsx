import React from 'react';
import { createUseStyles } from 'react-jss';
import { BackgroundStyles, FontStyles, SpacerStyles } from './JSSUtilities';

type Params = {
  heading: string,
  alternativeText: string,
  alternativeActionText: string,
  alternativeAction: React.MouseEventHandler,
  children: React.ReactNode
};

const AuthStyles = createUseStyles({
  pageClass: {
    padding: '0 5vw 0 5vw',
  },
  textClass: {
    color: 'white',
    fontSize: '6rem',
  },
  bottomTextClass: {
    color: 'white',
    fontSize: '1.1rem',
  },
  hyperlink: {
    color: '#7EA2FF',
    textDecoration: 'underline',
    textUnderlineOffset: '2px',
    borderColor: 'transparent',
    backgroundColor: 'transparent',
  },
});

export default function AuthContainerComponent({
  heading, alternativeText, alternativeActionText, alternativeAction, children,
}: Params) {
  const spacerStyles = SpacerStyles();
  const fontStyles = FontStyles();
  const backgroundStyles = BackgroundStyles();
  const authStyles = AuthStyles();

  return (
    <div className={`d-flex flex-column align-items-start justify-content-center vh-100 vw-100 ${authStyles.pageClass} ${backgroundStyles.bgDark}`}>
      <h1 className={`${fontStyles.lato} ${authStyles.textClass}`}>{heading}</h1>
      <div className={spacerStyles.h4} />
      {children}
      <div className={spacerStyles.h4} />
      <p className={authStyles.bottomTextClass}>
        {alternativeText}
        {' '}
        <button
          className={authStyles.hyperlink}
          type="button"
          onClick={alternativeAction}
        >
          {alternativeActionText}
        </button>
      </p>
    </div>
  );
}
