import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import { IRegistrationForm, IUser } from "../models/login.model";

const API_URL = "http://localhost:3001/";

const getUserList = async () => {
  return axios
    .get(`${API_URL}users`)
    .then((response) => response.data as IUser[]);
};

const createUser = async (newUser: IRegistrationForm) => {
  return axios
    .post(`${API_URL}users`, newUser)
    .then((response) => response.data);
};

const removeUser = async (id: string) => {
  return axios
    .delete(`${API_URL}users/${id}`)
    .then((response) => response.data);
};

export const useGetUserList = () => {
  const {
    isLoading,
    error,
    data: users,
  } = useQuery(["users"], () => getUserList());

  return {
    isLoading,
    error,
    users,
  };
};

export const useCreateUser = (
  onSuccess?: (data: IUser) => any,
  onError?: (error: any) => any
) => {
  return useMutation(
    (values: IRegistrationForm) => {
      return createUser(values);
    },
    {
      onSuccess: (data: IUser) => {
        if (onSuccess) {
          onSuccess(data);
        }
      },
      onError: (error: any) => {
        if (onError) onError(error);
      },
    }
  );
};

export const useDeleteUser = (onSuccess?: () => any, onError?: () => any) => {
  return useMutation(
    (id: string) => {
      return removeUser(id);
    },
    {
      onSuccess: () => {
        if (onSuccess) onSuccess();
      },
      onError: () => {
        if (onError) onError();
      },
    }
  );
};
