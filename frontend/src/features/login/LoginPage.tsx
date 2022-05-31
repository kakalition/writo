import axios from 'axios';
import React from 'react';
import {
  Button, Form,
} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import AuthContainerComponent from '../../common-component/AuthContainerComponent';
import { FontStyles, FormStyles, SpacerStyles } from '../../common-component/JSSUtilities';

export default function LoginPage() {
  const navigator = useNavigate();

  const formStyles = FormStyles();
  const fontStyles = FontStyles();
  const spacerStyles = SpacerStyles();

  const onRegisterClick: React.MouseEventHandler = (event) => {
    event.preventDefault();
    navigator('/register');
  };

  const onLoginClick: React.MouseEventHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData(document.getElementById('register-form') as HTMLFormElement);

    try {
      await axios.get('/sanctum/csrf-cookie');
      const response = await axios.post('login', formData);
      console.log(response.statusText);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthContainerComponent
      heading="Login"
      alternativeText="Not a member, yet?"
      alternativeActionText="Sign up here"
      alternativeAction={onRegisterClick}
    >
      <Form id="register-form" className={formStyles.formClass}>
        <Form.Group>
          <Form.Label htmlFor="email" className={`${fontStyles.roboto} ${formStyles.formTextClass}`}>Email Address</Form.Label>
          <Form.Control id="email" name="email" className={`${formStyles.formControlClass} ${fontStyles.roboto}`} type="email" placeholder="joseph@mail.com" />
        </Form.Group>
        <div className={spacerStyles.h1half} />
        <Form.Group>
          <Form.Label htmlFor="password" className={`${fontStyles.roboto} ${formStyles.formTextClass}`}>Password</Form.Label>
          <Form.Control id="password" name="password" className={`${formStyles.formControlClass} ${fontStyles.roboto}`} type="password" placeholder="••••••••" />
        </Form.Group>
        <div className={spacerStyles.h2} />
        <Button
          className={formStyles.formButton}
          variant="light"
          type="button"
          onClick={onLoginClick}
        >
          Login
        </Button>
      </Form>
    </AuthContainerComponent>
  );
}
