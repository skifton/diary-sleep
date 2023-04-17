import clsx from "clsx";
import React from "react";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  wrapperClassName?: string,
}
const SButton: React.FC<IProps> = ({ title, className, wrapperClassName, ...props }) => {
  return (
    <div className={wrapperClassName}>
      <button
        className={clsx("py-3 px-8 bg-teal-900 text-gray-200 rounded-full mt-7", className)}
        {...props}
      >
        {title}
      </button>
    </div>
  );
};

export default SButton;
