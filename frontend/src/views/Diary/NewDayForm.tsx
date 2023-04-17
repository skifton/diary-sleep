import React, { useEffect, useState } from "react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { diaryQuestions } from "../../constants/diary-questions";
import { UseFormReturn } from "react-hook-form";
import { IDiary } from "../../models/diary.model";
import FirstQuestion from "./FormQuestions/FirstQuestion";
import SecondQuestion from "./FormQuestions/SecondQuestion";
import ThirdQuestion from "./FormQuestions/ThirdQuestion";
import FourthQuestion from "./FormQuestions/FourthQuestion";
import FifthQuestion from "./FormQuestions/FifthQuestion";
import SixthQuestion from "./FormQuestions/SixthQuestion";
import SeventhQuestion from "./FormQuestions/SeventhQuestion";
import EighthQuestion from "./FormQuestions/EighthQuestion";
import NinthQuestion from "./FormQuestions/NinthQuestion";
import TenthQuestion from "./FormQuestions/TenthQuestion";
import EleventhQuestion from "./FormQuestions/EleventhQuestion";
import TwelfthQuestion from "./FormQuestions/TwelfthQuestion";
import ThirteenthQuestion from "./FormQuestions/ThirteenthQuestion";
import FourteenthQuestion from "./FormQuestions/FourteenthQuestion";
import FiftinthQuestion from "./FormQuestions/FiftinthQuestion";
import dayjs from "dayjs";

interface IProps {
  isAddMode: boolean;
  todayField?: IDiary;
  useFormInstance: UseFormReturn<IDiary>;
  onSubmitForm: (dataDiary: IDiary) => void;
  onUpdateForm: (dataDiary: IDiary) => void;
}
const NewDayForm: React.FC<IProps> = ({
  isAddMode,
  todayField,
  useFormInstance,
  onSubmitForm,
  onUpdateForm,
}) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const {
    handleSubmit,
    formState: { errors },
    control,
    setValue,
    getValues,
  } = useFormInstance;
  useEffect(() => {
    if (!isAddMode && todayField) {
      const fields = Object.keys(todayField).splice(2, 19);
      fields.forEach((field: any) => {
        setValue(
          field,
          field === "timeWentToBedYesterday" ||
            field === "decisionTimeToSleep" ||
            field === "wakeUpTime" ||
            field === "timeToGetOutOfBed"
            ? dayjs(todayField[field as keyof typeof todayField])
            : field === "amountOfAlcoholConsumedYesterday" ||
              field === "doseOfTheSleepingPill" ||
              field === "numberOfCigarretesSmokedYesterday" ||
              field === "totalMinutesOfSports"
            ? 0
            : todayField[field as keyof typeof todayField] === null
            ? ""
            : todayField[field as keyof typeof todayField]
        );
      });
    }
  }, []);

  const onNextClickHandler = () => {
    setCurrentStep(currentStep + 1);
  };

  const onPreviousClickHandler = () => {
    setCurrentStep(currentStep - 1);
  };
  console.log(errors);
  return (
    <div className="w-full">
      <form
        id={isAddMode ? "add" : "update"}
        onSubmit={handleSubmit(isAddMode ? onSubmitForm : onUpdateForm)}
      >
        <FirstQuestion
          currentStep={currentStep}
          control={control}
          diaryQuestions={diaryQuestions}
        />
        <SecondQuestion
          currentStep={currentStep}
          control={control}
          diaryQuestions={diaryQuestions}
        />
        <ThirdQuestion
          currentStep={currentStep}
          control={control}
          diaryQuestions={diaryQuestions}
        />
        <FourthQuestion
          currentStep={currentStep}
          control={control}
          diaryQuestions={diaryQuestions}
        />
        <FifthQuestion
          currentStep={currentStep}
          control={control}
          diaryQuestions={diaryQuestions}
        />
        <SixthQuestion
          currentStep={currentStep}
          control={control}
          diaryQuestions={diaryQuestions}
          getValues={getValues}
        />
        <SeventhQuestion
          currentStep={currentStep}
          control={control}
          diaryQuestions={diaryQuestions}
          getValues={getValues}
        />
        <EighthQuestion
          currentStep={currentStep}
          control={control}
          diaryQuestions={diaryQuestions}
        />
        <NinthQuestion
          currentStep={currentStep}
          control={control}
          diaryQuestions={diaryQuestions}
        />
        <TenthQuestion
          currentStep={currentStep}
          control={control}
          diaryQuestions={diaryQuestions}
        />
        <EleventhQuestion
          currentStep={currentStep}
          control={control}
          diaryQuestions={diaryQuestions}
          getValues={getValues}
        />
        <TwelfthQuestion
          currentStep={currentStep}
          control={control}
          diaryQuestions={diaryQuestions}
          getValues={getValues}
        />
        <ThirteenthQuestion
          currentStep={currentStep}
          control={control}
          diaryQuestions={diaryQuestions}
        />
        <FourteenthQuestion
          currentStep={currentStep}
          control={control}
          diaryQuestions={diaryQuestions}
        />
        <FiftinthQuestion
          currentStep={currentStep}
          control={control}
          diaryQuestions={diaryQuestions}
          isErrors={Object.keys(errors).length !== 0}
        />
        <div className="absolute flex justify-center bottom-7 right-0 left-0">
          <p>
            {currentStep}/{diaryQuestions.length}
          </p>
        </div>
        {currentStep > 1 ? (
          <button
            className="absolute bottom-7"
            type="button"
            onClick={onPreviousClickHandler}
          >
            <ArrowLeftIcon className="w-8 h-8" />
          </button>
        ) : null}
        {currentStep < diaryQuestions.length ? (
          <button
            className="absolute bottom-7 right-7"
            type="button"
            onClick={onNextClickHandler}
          >
            <ArrowRightIcon className="w-8 h-8" />
          </button>
        ) : currentStep === diaryQuestions.length ? (
          isAddMode ? (
            <button
              className="absolute bottom-7 right-7"
              type="submit"
              form="add"
              disabled={Object.keys(errors).length !== 0}
            >
              Save
            </button>
          ) : (
            <button
              className="absolute bottom-7 right-7"
              type="submit"
              form="update"
              disabled={Object.keys(errors).length !== 0}
            >
              Update
            </button>
          )
        ) : null}
      </form>
    </div>
  );
};

export default NewDayForm;
