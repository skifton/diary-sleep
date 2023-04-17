import React, { useContext, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ILoginForm } from "../../../models/login.model";
import LoginForm from "./LoginForm";
import AuthContext from "../../../contexts/AuthContext";
import { LoginFormSchema } from "../../../models/form-schema.model";

const Login: React.FC = () => {
  const [isError, setIsError] = useState<string>("");
  const useFormReturn = useForm<ILoginForm>({
    resolver: yupResolver(LoginFormSchema),
  });
  const navigate = useNavigate();
  const context = useContext(AuthContext);
  const { mutate: loginUser } = context?.loginUser(
    () => {
      navigate("/diary");
    },
    (error: any) => {
      setIsError(error.response.data.error);
    }
  );

  const onSubmitLoginFormHandler = (credentials: ILoginForm) => {
    loginUser(credentials);
  };
  
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <LoginForm
        useFormInstance={useFormReturn}
        onSubmitLoginForm={onSubmitLoginFormHandler}
        isError={isError}
      />
    </div>
  );
};

export default Login;
