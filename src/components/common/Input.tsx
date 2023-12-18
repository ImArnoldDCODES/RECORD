'use client'

import React from "react";

export interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string | React.ReactNode;
  helperText?: string | React.ReactNode;
  error?: boolean;
  containerClassName?: string;
  inputClassName?: string;
  inputRef?: React.Ref<HTMLInputElement>;
}

const Input = ({
  className,
  error,
  label,
  helperText,
  containerClassName,
  inputClassName,
  inputRef,
  ...props
}: InputProps) => {
  const [type, setType] = React.useState(props.type);

  return (
    <div className={`w-full ${containerClassName}`}>
      <label
        className={`text-sm text-text-black font-medium mb-5 capitalize ${className} ${
          error ? "error-text" : ""
        }`}
      >
        {label}
      </label>
      <div
        className={`w-full rounded-lg border-2 border-primary flex flex-row items-center overflow-hidden ${
          error ? "error-input" : ""
        } ${className}`}
      >
        <input
          ref={inputRef}
          className={`focus:outline-none p-2 flex-grow text-sm  rounded text-inherit outline-none text-black ${inputClassName}`}
          {...props}
          type={type || props.type}
        />
        {/* {props.type === "password" ? <div className="mx-2 cursor-pointer text-inherit">{type === "password" ? <Eye onClick={() => setType("text")} /> : <EyeSlash onClick={() => setType("password")} />}</div> : null} */}
      </div>
      <p className={`text-sm text-primary ${error ? "error-text" : ""}`}>
        {helperText}
      </p>
    </div>
  );
};

export default Input;
