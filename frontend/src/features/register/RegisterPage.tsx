import axios from 'axios';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import AuthContainerComponent from '../../common-component/AuthContainerComponent';
import { FontStyles, FormStyles, SpacerStyles } from '../../common-component/JSSUtilities';

export default function RegisterPage() {
  const navigator = useNavigate();

  const spacerStyles = SpacerStyles();
  const fontStyles = FontStyles();
  const formStyles = FormStyles();

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
      <Form id="login-form" className={formStyles.formClass}>
        <Form.Group>
          <Form.Label htmlFor="name" className={`${fontStyles.roboto} ${formStyles.formTextClass}`}>Name</Form.Label>
          <Form.Control id="name" name="name" className={`${formStyles.formControlClass} ${fontStyles.roboto}`} type="text" placeholder="Joseph Joestar" />
        </Form.Group>
        <div className={spacerStyles.h1half} />
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
          onClick={onSubmitClick}
        >
          Create account
        </Button>
      </Form>
    </AuthContainerComponent>
  );
}
