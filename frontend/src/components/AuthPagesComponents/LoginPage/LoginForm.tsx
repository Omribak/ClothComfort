import React, { useState } from 'react';
import { LoginInputs } from './constants';
import './LoginForm.css';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../redux/store';
import { LoginUser } from '../../../redux/Auth/AuthSlice';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginZodSchema } from '../../../schemas/AuthScemas';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(LoginZodSchema)
  });

  const dispatch = useDispatch<AppDispatch>();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    name: string
  ) => {
    setFormData({
      ...formData,
      [name]: e.target.value
    });
  };

  const HandleLoginSubmit = async () => {
    await dispatch(LoginUser(formData));
  };
  return (
    <div className="LoginFormWrapper">
      <form className="LoginForm" onSubmit={handleSubmit(HandleLoginSubmit)}>
        {LoginInputs.map((input, index) => (
          <div key={index} className="InputWrapper">
            <input
              type={input.type}
              id={input.name}
              {...register(input.name)}
              name={input.name}
              placeholder={input.placeholder}
              className="AuthInput"
              onChange={(e) => handleFormChange(e, input.name)}
            />
            {errors[input.name]?.message && (
              <p className="TextError">{String(errors[input.name]?.message)}</p>
            )}
          </div>
        ))}
        <button className="RedButton LoginButton">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
