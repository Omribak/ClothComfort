import React, { useEffect, useState } from 'react';
import AuthFormAnimeWrapper from '../../../components/animations/AuthFormAnimeWrapper';
import Stepper from '../../../components/AuthPagesComponents/Stepper/Stepper';
import './RegisterPage.css';
import RegisterForm from '../../../components/AuthPagesComponents/RegisterPage/RegisterForm/RegisterForm';
import { useMultiStepForm } from '../../../custom-hooks/useMultiStepForm';
import UserSection from '../../../components/AuthPagesComponents/RegisterPage/RegisterForm/FormSections/UserSection';
import AddressSection from '../../../components/AuthPagesComponents/RegisterPage/RegisterForm/FormSections/AddressSection';
import AccountSection from '../../../components/AuthPagesComponents/RegisterPage/RegisterForm/FormSections/AccountSection';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  RegisterAccountZodSchema,
  RegisterAddressZodSchema,
  RegisterUserZodSchema
} from '../../../schemas/AuthScemas';

const RegisterPage = () => {
  type RegFormProps = {
    firstName: string;
    lastName: string;
    age: string;
    state: string;
    city: string;
    street: string;
    email: string;
    password: string;
    confirmPassword: string;
  };

  const [regFormData, setRegFormData] = useState<RegFormProps>({
    firstName: '',
    lastName: '',
    age: '',
    state: '',
    city: '',
    street: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const updateFields = (fields: Partial<RegFormProps>) => {
    setRegFormData((prev) => {
      return { ...prev, ...fields };
    });
  };

  const [currentSchema, setCurrentSchema] = useState<any>(
    RegisterUserZodSchema
  );

  const {
    register,
    handleSubmit,
    formState: { errors, isLoading }
  } = useForm({
    resolver: zodResolver(currentSchema)
  });

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultiStepForm([
      <UserSection
        regFormData={regFormData}
        updateFields={updateFields}
        register={register}
        errors={errors}
      />,
      <AddressSection
        regFormData={regFormData}
        updateFields={updateFields}
        register={register}
        errors={errors}
      />,
      <AccountSection
        regFormData={regFormData}
        updateFields={updateFields}
        register={register}
        errors={errors}
      />
    ]);

  useEffect(() => {
    switch (currentStepIndex) {
      case 0:
        setCurrentSchema(RegisterUserZodSchema);
        break;
      case 1:
        setCurrentSchema(RegisterAddressZodSchema);
        break;
      case 2:
        setCurrentSchema(RegisterAccountZodSchema);
        break;
      default:
        break;
    }
  }, [currentStepIndex]);

  return (
    <AuthFormAnimeWrapper>
      <div className="RegisterPageWrapper">
        <div className="RegisterSectionContainer">
          <h1 className="RegisterPageTitle">Create a new account</h1>
          <Stepper currentStepIndex={currentStepIndex} />
          <RegisterForm
            steps={steps}
            currentStepIndex={currentStepIndex}
            step={step}
            isFirstStep={isFirstStep}
            isLastStep={isLastStep}
            back={back}
            next={next}
            handleSubmit={handleSubmit}
            regFormData={regFormData}
            setRegFormData={setRegFormData}
          />
        </div>
      </div>
    </AuthFormAnimeWrapper>
  );
};

export default RegisterPage;
