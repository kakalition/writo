import { createUseStyles } from 'react-jss';
import { BackgroundStyles, FontStyles, SpacerStyles } from '../../common-component/JSSUtilities';

const RegisterStyles = createUseStyles({
  pageClass: {
    padding: '0 5vw 0 5vw',
  },
  textClass: {
    color: 'white',
    fontSize: '5rem',
  },
});

export default function RegisterPage() {
  const registerStyle = RegisterStyles();
  const backgroundStyles = BackgroundStyles();
  const spacerStyles = SpacerStyles();
  const fontStyles = FontStyles();

  return (
    <div className={`d-flex flex-column align-items-start justify-content-center vh-100 vw-100 ${registerStyle.pageClass} ${backgroundStyles.bgDark}`}>
      <h1 className={`${fontStyles.lato} ${registerStyle.textClass}`}>Create new account</h1>
      <div className={spacerStyles.h6} />
    </div>
  );
}
