import React from 'react';
import { AddressSectionInputs, SectionProps } from './constants';
import RegFormWrapper from '../RegFormWrapper';

const AddressSection = ({
  regFormData,
  updateFields,
  register,
  errors
}: SectionProps) => {
  const { state, city, street } = regFormData;

  const handleInputChange = (name: keyof typeof regFormData, value: string) => {
    updateFields({
      ...regFormData,
      [name]: value
    });
  };

  return (
    <RegFormWrapper title="Address Details">
      {AddressSectionInputs.map((input, index) => (
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
              input.name === 'state'
                ? state
                : input.name === 'city'
                ? city
                : street
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

export default AddressSection;
