import React from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContainerComponent from '../../common-component/AuthContainerComponent';

export default function LoginPage() {
  const navigator = useNavigate();

  const onRegisterClick: React.MouseEventHandler = (event) => {
    event.preventDefault();
    navigator('/login');
  };

  return (
    <AuthContainerComponent
      heading="Login"
      alternativeText="Not a member, yet?"
      alternativeActionText="Sign up here"
      alternativeAction={onRegisterClick}
    >
      <div />
    </AuthContainerComponent>
  );
}
