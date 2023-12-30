"use client";

import { ChangeEventHandler } from "react";

type Option = {
  value: string;
  label: string;
};

export type SelectProps = {
  name: string;
  options: Option[];
  value?: string;
  onChange?: ChangeEventHandler<HTMLSelectElement>;
  className?: string;
  disabled?: boolean;
  title?: string;
};

const Index: React.FC<SelectProps> = ({
  name,
  options,
  value,
  onChange,
  className,
  disabled,
  title,
}) => {
  return (
    <div>
      <label className="text-sm font-medium capitalize text-white">
        {title}
      </label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className={`bg-[#454545] block w-full rounded-md shadow-sm outline-none text-white my-2 py-2 font-inter ${className}`}
        disabled={disabled}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Index;
