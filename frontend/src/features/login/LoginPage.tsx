import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContainerComponent from '../../common-component/AuthContainerComponent';
import InputComponent from '../../common-component/InputComponent';

export default function LoginPage() {
  const navigator = useNavigate();
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
    <div className="flex justify-center items-center w-screen h-screen bg-gray-900">
      <AuthContainerComponent
        heading="Login"
        alternativeText="Not a member, yet?"
        alternativeActionText="Sign up here"
        alternativeAction={onRegisterClick}
      >
        <form className="flex flex-col w-full">
          <InputComponent id="email" label="Email address" type="email" placeholder="joseph@mail.com" />
          <div className="h-6" />
          <InputComponent id="password" label="Password" type="password" placeholder="••••••••" />
          <div className="h-16" />
          <button
            type="button"
            className="py-4 px-10 text-xl text-black bg-white rounded-lg font-roboto"
            onClick={onLoginClick}
          >
            Login
          </button>
        </form>
      </AuthContainerComponent>
    </div>
  );
}
