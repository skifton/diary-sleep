import clsx from "clsx";
import React from "react";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  wrapperClassName?: string;
  label?: string;
  error?: boolean;
  helperText?: string;
}
const SInput: React.FC<IProps> = ({
  label,
  wrapperClassName,
  error,
  helperText,
  required,
  type = "text",
  className,
  ...props
}) => {
  return (
    <div className={wrapperClassName}>
      {label && (
        <label
          className={clsx("block text-md font-medium text-gray-700 text-left pb-1", {
            "after:content-['*'] after:ml-0.5 after:text-red-500": required,
            "text-red-900": error,
          })}
        >
          {label}
        </label>
      )}
      <input
        type={type}
        required={required}
        className={clsx(
          "text-xl rounded-full px-3 py-1 outline-none active:border active:border-gray-500 focus:border-gray-500 focus:border",
          {
            "border border-red-500": error,
          },
          className
        )}
        {...props}
      />
      {error && <p className="text-red-500 mt-2 font-thin text-sm text-left ml-3">{helperText}</p>}
    </div>
  );
};

export default SInput;
