import React from "react";
import { Controller } from "react-hook-form";

interface IProps {
  currentStep: number;
  control: any;
  diaryQuestions: { title: string; hint: string }[];
}
const FirstQuestion: React.FC<IProps> = ({
  currentStep,
  control,
  diaryQuestions,
}) => {
  if (currentStep !== 1) return null;
  return (
    <div className="">
      <h2 className="text-2xl font-medium">
        {diaryQuestions[currentStep - 1].title}
      </h2>
      <p className="text-gray-600 text-sm font-sm mt-2">
        {diaryQuestions[currentStep - 1].hint}
      </p>
      <div className="flex space-x-6 mt-20 justify-center">
        <Controller
          name="amountOfSleepYesterday"
          control={control}
          render={({ field: { onChange, value } }) => {
            return (
              <div className="flex">
                <input
                  className="w-10 text-xl text-center border-b border-gray-600 outline-none"
                  type="number"
                  min={0}
                  max={50}
                  placeholder="0"
                  maxLength={2}
                  onChange={onChange}
                  value={value}
                />
                <p className="mt-1 font-thin">&nbsp; times</p>
              </div>
            );
          }}
        />
        <Controller
          name="totalMinutesOfSleepYesterday"
          control={control}
          render={({ field: { onChange, value } }) => {
            return (
              <div className="flex">
                <input
                  className="w-10 text-xl text-center border-b border-gray-600 outline-none"
                  type="number"
                  min={0}
                  max={50}
                  placeholder="0"
                  maxLength={2}
                  onChange={onChange}
                  value={value}
                />
                <p className="mt-1 font-thin">&nbsp; min</p>
              </div>
            );
          }}
        />
      </div>
    </div>
  );
};

export default FirstQuestion;
