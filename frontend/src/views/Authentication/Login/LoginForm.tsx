import React from "react";
import { Link } from "react-router-dom";
import { Controller, UseFormReturn } from "react-hook-form";
import {
  ArrowLeftIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";
import SInput from "../../../components/UI/SInput";
import SButton from "../../../components/UI/SButton";
import { ILoginForm } from "../../../models/login.model";
import "animate.css";

interface IProps {
  useFormInstance: UseFormReturn<ILoginForm>;
  onSubmitLoginForm: (credentials: ILoginForm) => void;
  isError: string;
}
const LoginForm: React.FC<IProps> = ({
  useFormInstance,
  onSubmitLoginForm,
  isError,
}) => {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useFormInstance;
  return (
    <form
      onSubmit={handleSubmit(onSubmitLoginForm)}
      className="bg-slate-200 text-teal-950 w-[30rem] text-center px-5 py-14 rounded-lg drop-shadow-xl shadow-slate-400 animate__animated animate__backInRight"
    >
      <div className="flex items-center grid grid-cols-3">
        <Link to={"/registration"}>
          <ArrowLeftIcon className="w-5 h-5 text-gray-900 text-left" />
        </Link>
        <h2 className="text-2xl font-bold">Login</h2>
      </div>

      {isError.length !== 0 && (
        <div className="flex items-center mt-5 bg-red-400 p-2 rounded-md">
          <ExclamationTriangleIcon className="w-8 h-8 mr-2" />
          <p>{isError}</p>
        </div>
      )}

      <Controller
        name="email"
        control={control}
        render={({ field: { onChange, value } }) => (
          <SInput
            value={value}
            onChange={onChange}
            maxLength={30}
            placeholder="Email"
            className="w-full"
            wrapperClassName="text-center mb-10 mt-5"
            error={Boolean(errors.email?.message)}
            helperText={errors.email?.message}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({ field: { onChange, value } }) => (
          <SInput
            value={value}
            onChange={onChange}
            maxLength={30}
            type="password"
            placeholder="Password"
            className="w-full"
            wrapperClassName="text-center mt-10"
            error={Boolean(errors.password?.message)}
            helperText={errors.password?.message}
          />
        )}
      />

      <SButton title="Login" type="submit" className="w-full" />
    </form>
  );
};

export default LoginForm;
