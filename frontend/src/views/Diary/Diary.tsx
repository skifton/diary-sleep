import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CheckBadgeIcon, FireIcon } from "@heroicons/react/24/outline";
import { IDiary } from "../../models/diary.model";
import {
  useCreateDiaryField,
  useGetDiaryList,
  useUpdateDiary,
} from "../../services/diary.service";
import { DiaryFormSchema } from "../../models/form-schema.model";
import AuthContext from "../../contexts/AuthContext";
import SButton from "../../components/UI/SButton";
import SModal from "../../components/SModal";
import NewDayForm from "./NewDayForm";
import "animate.css";

const Diary: React.FC = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [isAddMode, setIsAddMode] = useState<boolean>(true);
  const context = useContext(AuthContext);
  const { diaryList } = useGetDiaryList(
    context?.user?.userId ? context?.user?.userId : ""
  );
  const todayField = diaryList?.find(
    (item: IDiary) =>
      item.createdAt?.slice(0, 10) === new Date().toISOString().slice(0, 10)
  );
  const { mutate: createDiary } = useCreateDiaryField((data) => {
    window.location.reload();
    changeIsOpenStateHandler();
  });
  const { mutate: updateDiary } = useUpdateDiary(() => {
    window.location.reload();
    changeIsOpenStateHandler();
  });
  const useFormReturn = useForm<IDiary>({
    resolver: yupResolver(DiaryFormSchema),
  });

  const changeIsOpenStateHandler = () => {
    setIsOpenModal(!isOpenModal);
  };

  const onClickEditMode = () => {
    setIsAddMode(false);
    changeIsOpenStateHandler();
  };

  const onClickAddMode = () => {
    setIsAddMode(true);
    changeIsOpenStateHandler();
  };

  const onSubmitFormHandler = (diaryData: IDiary) => {
    const correctData = { user_id: context?.user?.userId, ...diaryData };
    createDiary(correctData);
  };

  const onUpdateFormHandler = (diaryData: IDiary) => {
    updateDiary({
      id: todayField?.id ? todayField?.id : "",
      params: { ...diaryData },
    });
  };

  return (
    <>
      {isOpenModal && (
        <SModal isOpen={isOpenModal} onCloseModal={changeIsOpenStateHandler}>
          <NewDayForm
            isAddMode={isAddMode}
            todayField={todayField}
            onSubmitForm={onSubmitFormHandler}
            useFormInstance={useFormReturn}
            onUpdateForm={onUpdateFormHandler}
          />
        </SModal>
      )}
      {todayField ? (
        <div className="w-full text-center text-teal-900 pt-32 lg:pt-48 animate__animated animate__bounceInDown">
          <div className="flex justify-center mb-7">
            <CheckBadgeIcon className="h-32 w-32" />
          </div>
          <h2 className="text-3xl font-normal">
            You’ve completed
            <br /> your diary for today!
          </h2>
          <p className="mt-7 mb-7">
            Come back tomorrow to record <br /> your sleep.
          </p>
          <SButton
            title="Edit"
            type="button"
            className="px-20"
            onClick={onClickEditMode}
          />
        </div>
      ) : (
        <div className="w-full text-center text-teal-900 pt-64 animate__animated animate__bounceInDown">
          <div className="flex justify-center mb-7">
            <FireIcon className="w-32 h-32" />
          </div>
          <h2 className="text-2xl font-normal">
            Welcome back to
            <br /> your Sleep Diary!
          </h2>
          <p className="mt-7 mb-7">
            Remember, for best results <br />
            complete everyday within one
            <br /> hour of waking!
          </p>
          <SButton
            title="Start a new entry"
            type="button"
            className="px-20"
            onClick={onClickAddMode}
          />
        </div>
      )}
    </>
  );
};

export default Diary;
