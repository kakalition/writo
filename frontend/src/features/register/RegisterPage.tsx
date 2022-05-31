import { Button, Form } from 'react-bootstrap';
import { createUseStyles } from 'react-jss';
import { BackgroundStyles, FontStyles, SpacerStyles } from '../../common-component/JSSUtilities';

const RegisterStyles = createUseStyles({
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
  },
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
    padding: '0.8rem 2.4rem 0.8rem 2.4rem',
    fontSize: '1.3rem',
    fontFamily: ['Roboto', 'sans-serif'],
  },
  formClass: {
    width: '40%',
  },
});

export default function RegisterPage() {
  const registerStyles = RegisterStyles();
  const backgroundStyles = BackgroundStyles();
  const spacerStyles = SpacerStyles();
  const fontStyles = FontStyles();

  return (
    <div className={`d-flex flex-column align-items-start justify-content-center vh-100 vw-100 ${registerStyles.pageClass} ${backgroundStyles.bgDark}`}>
      <h1 className={`${fontStyles.lato} ${registerStyles.textClass}`}>Create new account</h1>
      <div className={spacerStyles.h4} />
      <Form className={registerStyles.formClass}>
        <Form.Group controlId="nameForm">
          <Form.Label className={`${fontStyles.roboto} ${registerStyles.formTextClass}`}>Name</Form.Label>
          <Form.Control className={`${registerStyles.formControlClass} ${fontStyles.roboto}`} type="text" placeholder="Joseph Joestar" />
        </Form.Group>
        <div className={spacerStyles.h1half} />
        <Form.Group controlId="emailForm">
          <Form.Label className={`${fontStyles.roboto} ${registerStyles.formTextClass}`}>Email Address</Form.Label>
          <Form.Control className={`${registerStyles.formControlClass} ${fontStyles.roboto}`} type="email" placeholder="joseph@mail.com" />
        </Form.Group>
        <div className={spacerStyles.h1half} />
        <Form.Group controlId="passwordForm">
          <Form.Label className={`${fontStyles.roboto} ${registerStyles.formTextClass}`}>Password</Form.Label>
          <Form.Control className={`${registerStyles.formControlClass} ${fontStyles.roboto}`} type="password" placeholder="••••••••" />
        </Form.Group>
        <div className={spacerStyles.h2} />
        <Button
          className={registerStyles.formButton}
          variant="light"
          type="button"
        >
          Create account
        </Button>
      </Form>
      <div className={spacerStyles.h4} />
      <p className={registerStyles.bottomTextClass}>
        Already have an account?
        {' '}
        <a href="#" className={registerStyles.hyperlink}>Login here</a>
      </p>
    </div>
  );
}
