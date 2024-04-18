import React, { useState } from 'react';
import SignUp from "./loginUp";

const FormContainer = () => {
  const [signup, setSignUpMode] = useState(false);

  const handleSignUpClick = () => {
    setSignUpMode(true);
  };

  const handleSignInClick = () => {
    setSignUpMode(false);
  };

  return (
    <SignUp 
      signUpMode={signup} 
      onSignUpClick={handleSignUpClick} 
      onSignInClick={handleSignInClick} 
    />
  );
}

export default FormContainer;
