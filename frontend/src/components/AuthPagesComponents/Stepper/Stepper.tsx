import React from 'react';
import { StepperCategories } from './constants';
import './Stepper.css';
import { useMultiStepForm } from '../../../custom-hooks/useMultiStepForm';
import { Check } from 'lucide-react';

type StepperProps = {
  currentStepIndex: number;
};

const Stepper = ({ currentStepIndex }: StepperProps) => {
  return (
    <div className="StepperWrapper">
      {StepperCategories.map((category, index) => (
        <div
          key={index}
          className={`StepItem ${currentStepIndex === index ? 'active' : ''} ${
            index < currentStepIndex ? 'completed' : ''
          }`}
        >
          <div className="StepNumber">
            {index < currentStepIndex ? <Check /> : index + 1}
          </div>
          <p className="StepName">{category}</p>
        </div>
      ))}
      <div className="ProgressBar">
        <div className="Progress"></div>
      </div>
    </div>
  );
};

export default Stepper;
