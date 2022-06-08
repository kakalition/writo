import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContainerComponent from '../../common-component/AuthContainerComponent';
import InputComponent from '../../common-component/InputComponent';

export default function RegisterPage() {
  const [nameError, setNameError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const navigator = useNavigate();

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
    } catch (error: any) {
      const { name, email, password } = error.response.data.errors;
      setNameError(name?.[0] ?? null);
      setEmailError(email?.[0] ?? null);
      setPasswordError(password?.[0] ?? null);
    }
  };

  return (
    <div className="flex justify-center items-center w-screen h-screen bg-gray-900">
      <AuthContainerComponent
        heading="New Account"
        alternativeText="Already have an account? "
        alternativeActionText="Login here"
        alternativeAction={onLoginClick}
      >
        <form id="register-form" className="flex flex-col w-full">
          <InputComponent
            id="name"
            label="Name"
            type="text"
            placeholder="Joseph Joestar"
            error={nameError}
          />
          <div className="h-6" />
          <InputComponent
            id="email"
            label="Email address"
            type="email"
            placeholder="joseph@mail.com"
            error={emailError}
          />
          <div className="h-6" />
          <InputComponent
            id="password"
            label="Password"
            type="password"
            placeholder="••••••••"
            error={passwordError}
          />
          <div className="h-16" />
          <button
            type="button"
            className="py-4 px-10 text-xl text-black bg-white rounded-lg font-roboto"
            onClick={onSubmitClick}
          >
            Create account
          </button>
        </form>
      </AuthContainerComponent>
    </div>
  );
}
