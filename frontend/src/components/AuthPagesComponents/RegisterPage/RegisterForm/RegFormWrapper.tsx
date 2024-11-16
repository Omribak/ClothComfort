import React from 'react';

type WrapperProps = {
  title: string;
  children: React.ReactNode;
};

const RegFormWrapper = ({ title, children }: WrapperProps) => {
  return (
    <>
      <h2 className="RegFormTitle">{title}</h2>
      <div className="RegFormWrap">{children}</div>
    </>
  );
};

export default RegFormWrapper;
