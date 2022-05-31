import axios from 'axios';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { createUseStyles } from 'react-jss';
import { useNavigate } from 'react-router-dom';
import AuthContainerComponent from '../../common-component/AuthContainerComponent';
import { FontStyles, SpacerStyles } from '../../common-component/JSSUtilities';

const RegisterStyles = createUseStyles({
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

export default function RegisterPage() {
  const navigator = useNavigate();

  const registerStyles = RegisterStyles();
  const spacerStyles = SpacerStyles();
  const fontStyles = FontStyles();

  const onLoginClick: React.MouseEventHandler = (event) => {
    event.preventDefault();
    navigator('/login');
  };

  const onSubmitClick: React.MouseEventHandler = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('name', (document.getElementById('name') as HTMLInputElement).value);
    formData.append('email', (document.getElementById('email') as HTMLInputElement).value);
    formData.append('password', (document.getElementById('password') as HTMLInputElement).value);
    formData.append('password_confirmation', (document.getElementById('password') as HTMLInputElement).value);

    try {
      await axios.get('/sanctum/csrf-cookie');
      const response = await axios.post('register', formData);
      if (response.status === 201) navigator('/app');
      console.error(response.statusText);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthContainerComponent
      heading="Create new account"
      alternativeText="Already have an account? "
      alternativeActionText="Login here"
      alternativeAction={onLoginClick}
    >
      <Form id="login-form" className={registerStyles.formClass}>
        <Form.Group>
          <Form.Label htmlFor="name" className={`${fontStyles.roboto} ${registerStyles.formTextClass}`}>Name</Form.Label>
          <Form.Control id="name" name="name" className={`${registerStyles.formControlClass} ${fontStyles.roboto}`} type="text" placeholder="Joseph Joestar" />
        </Form.Group>
        <div className={spacerStyles.h1half} />
        <Form.Group>
          <Form.Label htmlFor="email" className={`${fontStyles.roboto} ${registerStyles.formTextClass}`}>Email Address</Form.Label>
          <Form.Control id="email" name="email" className={`${registerStyles.formControlClass} ${fontStyles.roboto}`} type="email" placeholder="joseph@mail.com" />
        </Form.Group>
        <div className={spacerStyles.h1half} />
        <Form.Group>
          <Form.Label htmlFor="password" className={`${fontStyles.roboto} ${registerStyles.formTextClass}`}>Password</Form.Label>
          <Form.Control id="password" name="password" className={`${registerStyles.formControlClass} ${fontStyles.roboto}`} type="password" placeholder="••••••••" />
        </Form.Group>
        <div className={spacerStyles.h2} />
        <Button
          className={registerStyles.formButton}
          variant="light"
          type="button"
          onClick={onSubmitClick}
        >
          Create account
        </Button>
      </Form>
    </AuthContainerComponent>
  );
}
