import React from 'react';
import './RegisterForm.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../../redux/store';
import { RegisterUser } from '../../../../redux/Auth/AuthSlice';
import { Loader } from 'lucide-react';
type RegisterFormProps = {
  steps: JSX.Element[];
  currentStepIndex: number;
  isFirstStep: boolean;
  isLastStep: boolean;
  step: JSX.Element;
  next: () => void;
  back: () => void;
  handleSubmit: any;
  regFormData: any;
  setRegFormData: any;
};

const RegisterForm = ({
  steps,
  currentStepIndex,
  isFirstStep,
  isLastStep,
  step,
  next,
  back,
  handleSubmit,
  regFormData,
  setRegFormData
}: RegisterFormProps) => {
  const { isAuthLoading: isLoading } = useSelector(
    (state: RootState) => state.AuthReducer
  );
  const dispatch = useDispatch<AppDispatch>();
  const onSubmit = async () => {
    if (currentStepIndex === steps.length - 1) {
      const formData = {
        ...regFormData,
        username: `${regFormData.firstName} ${regFormData.lastName}`
      };
      await dispatch(RegisterUser(formData));
    } else {
      next();
    }
  };

  return (
    <div className="RegisterFormWrapper">
      <form className="RegisterForm" onSubmit={handleSubmit(onSubmit)}>
        <div className="IndexIndicator">
          <span>
            {currentStepIndex + 1}/{steps.length}
          </span>
        </div>
        {step}
        <div className="RegFormButtonsWrapper">
          {!isFirstStep && (
            <button className="RedButton" onClick={back} type="button">
              Back
            </button>
          )}
          <button className="RedButton" type="submit">
            {isLoading ? 'Loading...' : isLastStep ? 'Finish' : 'Next'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
