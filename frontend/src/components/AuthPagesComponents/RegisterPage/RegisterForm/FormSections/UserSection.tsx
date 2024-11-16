import React from 'react';
import { SectionProps, UserSectionInputs } from './constants';
import RegFormWrapper from '../RegFormWrapper';

const UserSection = ({
  regFormData,
  updateFields,
  register,
  errors
}: SectionProps) => {
  const { firstName, lastName, age } = regFormData;

  const handleInputChange = (name: keyof typeof regFormData, value: string) => {
    updateFields({
      ...regFormData,
      [name]: value
    });
  };

  return (
    <RegFormWrapper title="User Details">
      {UserSectionInputs.map((input, index) => (
        <div key={index} className="RegInputStyle">
          <div className="RegLabelWrapper">
            <label className="InputLabel">{input.label}</label>
            {input.required && <span className="RegInputRequired">*</span>}
          </div>
          <input
            type={input.type}
            placeholder={input.placeholder}
            className="AuthInput"
            {...register(input.name)}
            value={
              input.name === 'firstName'
                ? firstName
                : input.name === 'lastName'
                ? lastName
                : age
            }
            onChange={(e) =>
              handleInputChange(
                input.name as keyof typeof regFormData,
                e.target.value
              )
            }
          />
          {errors[input.name] && (
            <p className="TextError">{errors[input.name].message}</p>
          )}
        </div>
      ))}
    </RegFormWrapper>
  );
};

export default UserSection;
