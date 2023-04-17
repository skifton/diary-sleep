import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import queryClient from "../constants/query-client";
import { IDiary } from "../models/diary.model";

const getDiary = async (id: string) => {
  return axios
    .get(`http://localhost:3001/diary/${id}`, {
      headers: {
        authorization: "Baerer " + localStorage.getItem("accessToken"),
      },
    })
    .then((response) => response.data as IDiary);
};

const getDiaryList = async (id: string) => {
  return axios
    .get(`http://localhost:3001/diary-all/${id}`, {
      headers: {
        authorization: "Baerer " + localStorage.getItem("accessToken"),
      },
    })
    .then((response) => response.data as IDiary[]);
};

const createDiaryField = async (diaryField: IDiary) => {
  return await axios
    .post("http://localhost:3001/diary", diaryField, {
      headers: {
        authorization: "Baerer " + localStorage.getItem("accessToken"),
      },
    })
    .then((response) => response.data as IDiary);
};

const updateDiaryField = async (id: string, params: any) => {
  return axios
    .put(`http://localhost:3001/diary/${id}`, params, {
      headers: {
        authorization: "Baerer " + localStorage.getItem("accessToken"),
      },
    })
    .then((response) => response.data as IDiary);
};

const deleteDiaryField = async (id: string) => {
  return axios
    .delete(`http://localhost:3001/diary/${id}`, {
      headers: {
        authorization: "Baerer " + localStorage.getItem("accessToken"),
      },
    })
    .then((response) => response.data as IDiary);
};

const useGetDiaryList = (id: string) => {
  const {
    isLoading,
    error,
    data: diaryList,
  } = useQuery(["diary", id], () => getDiaryList(id));

  return {
    isLoading,
    error,
    diaryList,
  };
};

const useGetDiaryFieldDetail = (id: string) => {
  const {
    isLoading,
    error,
    data: diaryField,
  } = useQuery(["diary", id], () => getDiary(id));

  return {
    isLoading,
    error,
    diaryField,
  };
};

const useCreateDiaryField = (
  onSuccess?: (data: IDiary) => any,
  onError?: (error: any) => any
) => {
  return useMutation(
    (values: IDiary) => {
      return createDiaryField(values);
    },
    {
      onSuccess: (data) => {
        if (queryClient.getQueryData(["diary"])) {
          queryClient.setQueryData(["diary"], (cachedDiaryList?: IDiary[]) => {
            if (!cachedDiaryList) return;

            return [...cachedDiaryList, data];
          });
        }
        if (onSuccess) onSuccess(data);
      },
      onError: (error: any) => {
        if (onError) onError(error);
      },
    }
  );
};

const useUpdateDiary = (
  onSuccess?: (category: IDiary) => any,
  onError?: () => any
) => {
  return useMutation(
    ({ id, params }: { id: string; params: any }) => {
      return updateDiaryField(id, params);
    },
    {
      onSuccess: (data) => {
        if (queryClient.getQueryData(["diary"])) {
          queryClient.setQueryData(["diary"], (cachedDiaryList?: IDiary[]) => {
            if (!cachedDiaryList) return;

            return [...cachedDiaryList, data];
          });
        }
        if (onSuccess) onSuccess(data);
      },
      onError: () => {
        if (onError) onError();
      },
    }
  );
};

const useDeleteDiary = (onSuccess?: () => any, onError?: () => any) => {
  return useMutation(
    (id: string) => {
      return deleteDiaryField(id);
    },
    {
      onSuccess: (id) => {
        queryClient.removeQueries(["diary", id], { exact: true });

        if (queryClient.getQueryData(["diary"])) {
          queryClient.setQueryData(["diary"], (cachedDiaryList?: IDiary[]) => {
            return cachedDiaryList?.filter(
              (diaryField: any) => diaryField?.id !== id
            );
          });
        }

        if (onSuccess) onSuccess();
      },
      onError: () => {
        if (onError) onError();
      },
    }
  );
};

export {
  useGetDiaryList,
  useGetDiaryFieldDetail,
  useCreateDiaryField,
  useUpdateDiary,
  useDeleteDiary,
};
