import { useState, useEffect } from 'react';
import React from 'react';

const RadioButton = ({
  option,
  isSelected,
  onOptionChange,
}: {
  option: { label: string; value: string };
  isSelected: boolean;
  onOptionChange: (value: string) => void;
}) => {
  return (
    <button
      className={`${
        isSelected
          ? 'bg-inherit text-black border-none shadow-none'
          : 'bg-white text-gray-800 shadow-md'
      } font-medium py-1 px-4  border-gray-400 rounded-md transition-colors duration-300 w-1/2`}
      onClick={() => onOptionChange(option.value)}
    >
      {option.label}
    </button>
  );
};

type Props = {
  setStatus: (value: string) => void;
  role: any;
};

const RadioGroup = ({ setStatus, role }: Props) => {
  const [selectedOption, setSelectedOption] = useState<string>('User');
  const options = [
    {
      label: 'User',
      value: 'User',
    },
    {
      label: 'Administrator',
      value: 'Administrator',
    },
  ];

  useEffect(() => {
    if (role != undefined) {
      setSelectedOption(role);
    }
  }, [role]);

  const handleOptionChange = (value: string) => {
    setSelectedOption(value);
    setStatus(value);
  };

  return (
    <div className="flex justify-between p-1 w-full gap-2">
      {options.map((option) => (
        <RadioButton
          key={option.value}
          option={option}
          isSelected={selectedOption === option.value}
          onOptionChange={handleOptionChange}
        />
      ))}
    </div>
  );
};

export default React.memo(RadioGroup);
