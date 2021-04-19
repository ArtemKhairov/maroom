import React, { useState } from "react";
import Confirm from "./ConfirmForm/Confirm";
import EmailForm from "./EmailForm/EmailForm";
import PasswordForm from "./EmailForm/PasswordForm";
import PersonalDataForm from "./PersonalDataForm/PersonalDataForm";

const FormRegister = (props) => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = (event) => {
    event.preventDefault();
    setStep(step - 1);
  };

  const homeStep = () => {
    setStep(1);
  };

  switch (step) {
    case 1:
      return (
        <PersonalDataForm nextStep={nextStep}
          {...props}
          
        />
      );
    case 2:
      return (
        <EmailForm
          nextStep={nextStep}
          prevStep={prevStep}
          {...props}
        />
      );
    case 3:
      return (
        <PasswordForm
          nextStep={nextStep}
          prevStep={prevStep}
          {...props}
        />
      );
    case 4:
      return (
        <Confirm
          homeStep={homeStep}
          prevStep={prevStep}
          {...props}
        />
      );
    default:
      return <h1>Что-то пошло не по плану...</h1>
  }
};

export default FormRegister;
