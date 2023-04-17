import React, { useState } from "react";
import RegistrationForm from "./RegistrationForm";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { IRegistrationForm } from "../../../models/login.model";
import { yupResolver } from "@hookform/resolvers/yup";
import { useCreateUser } from "../../../services/authentication.service";
import { RegistrationFormSchema } from '../../../models/form-schema.model';

const Registration: React.FC = () => {
  const [isError, setIsError] = useState<string>('');
  const useFormReturn = useForm<IRegistrationForm>({
    resolver: yupResolver(RegistrationFormSchema),
  });
  const { mutate: createUser } = useCreateUser(
    () => {
      navigate('/login');
    },
    (error) => {
      setIsError(error.response.data.error);
    }
  );
  const navigate = useNavigate();

  const onSubmitRegistrationFormHandler = (data: IRegistrationForm) => {
    createUser(data);
  };
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <RegistrationForm
        useFormInstance={useFormReturn}
        onSubmitRegistrationForm={onSubmitRegistrationFormHandler}
        isError={isError}
      />
    </div>
  );
};

export default Registration;
