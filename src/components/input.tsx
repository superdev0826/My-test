import React, { useState } from 'react';

type InputProps = {
  label: string;
  name: string;
  type: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error: string;
};

const Input = ({ label, name, type, value, onChange, error }: InputProps) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-gray-700 font-[inter] mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={`appearance-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] mt-2  border f border-[#E2E8F0] p-2 rounded-lg`}
      />
      {error && <p className="text-red-500 text-xs ">{error}</p>}
    </div>
  );
};

export default Input;
