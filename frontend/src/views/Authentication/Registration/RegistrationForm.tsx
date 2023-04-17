import React from "react";
import { IRegistrationForm } from "../../../models/login.model";
import moment from "moment";
import { Controller, UseFormReturn } from "react-hook-form";
import SInput from "../../../components/UI/SInput";
import { Link } from "react-router-dom";
import SButton from "../../../components/UI/SButton";
import "animate.css";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

interface IProps {
  useFormInstance: UseFormReturn<IRegistrationForm>;
  onSubmitRegistrationForm: (data: IRegistrationForm) => void;
  isError: string;
}
const RegistrationForm: React.FC<IProps> = ({
  useFormInstance,
  onSubmitRegistrationForm,
  isError,
}) => {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useFormInstance;
  return (
    <form
      onSubmit={handleSubmit(onSubmitRegistrationForm)}
      className="bg-slate-200 text-teal-950 w-[30rem] text-center px-5 py-14 mx-3 my-6 rounded-lg drop-shadow-xl shadow-slate-400 animate__animated animate__backInRight lg:mx-auto lg:my-auto"
    >
      <h2 className="text-2xl font-bold">Registration</h2>
      {isError.length !== 0 && (
        <div className="flex items-center mt-5 bg-red-400 p-2 rounded-md">
          <ExclamationTriangleIcon className="w-8 h-8 mr-2" />
          <p>{isError}</p>
        </div>
      )}
      <Controller
        name="name"
        control={control}
        render={({ field: { onChange, value } }) => (
          <SInput
            value={value}
            maxLength={30}
            onChange={onChange}
            placeholder="Name"
            className="w-full"
            wrapperClassName="text-center my-7"
            error={Boolean(errors.name?.message)}
            helperText={errors.name?.message}
          />
        )}
      />
      <Controller
        name="surname"
        control={control}
        render={({ field: { onChange, value } }) => (
          <SInput
            value={value}
            maxLength={30}
            onChange={onChange}
            placeholder="Surname"
            className="w-full"
            wrapperClassName="text-center my-7"
            error={Boolean(errors.surname?.message)}
            helperText={errors.surname?.message}
          />
        )}
      />
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
            wrapperClassName="text-center my-7"
            error={Boolean(errors.email?.message)}
            helperText={errors.email?.message}
          />
        )}
      />
      <Controller
        name="bDay"
        control={control}
        render={({ field: { onChange, value } }) => (
          <SInput
            value={value}
            type="date"
            onChange={onChange}
            placeholder="Email"
            wrapperClassName="text-center my-7"
            className="w-full"
            max={moment().format("YYYY-MM-DD")}
            error={Boolean(errors.bDay?.message)}
            helperText={errors.bDay?.message}
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
            maxLength={12}
            placeholder="Password"
            className="w-full"
            type="password"
            wrapperClassName="text-center my-7"
            error={Boolean(errors.password?.message)}
            helperText={errors.password?.message}
          />
        )}
      />
      <Controller
        name="confirmPassword"
        control={control}
        render={({ field: { onChange, value } }) => (
          <SInput
            value={value}
            onChange={onChange}
            maxLength={12}
            placeholder="Confirm Password"
            className="w-full"
            type="password"
            wrapperClassName="text-center my-7"
            error={Boolean(errors.confirmPassword?.message)}
            helperText={errors.confirmPassword?.message}
          />
        )}
      />

      <SButton title="Submit" type="submit" className="w-full" />
      <p className="mt-4">
        You already have an account?{" "}
        <Link to="/login" className="text-sky-800">
          Login!
        </Link>
      </p>
    </form>
  );
};

export default RegistrationForm;
