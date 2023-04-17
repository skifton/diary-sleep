import React from "react";
import { Controller } from "react-hook-form";

interface IProps {
  currentStep: number;
  control: any;
  diaryQuestions: { title: string; hint: string }[];
}
const TenthQuestion: React.FC<IProps> = ({
  currentStep,
  control,
  diaryQuestions,
}) => {
  if (currentStep !== 10) return null;
  return (
    <div className="">
      <h2 className="text-2xl font-medium">
        {diaryQuestions[currentStep - 1].title}
      </h2>
      <p className="text-gray-600 text-sm font-sm mt-2">
        {diaryQuestions[currentStep - 1].hint}
      </p>
      <Controller
        name="totalWakeUpTime"
        control={control}
        render={({ field: { onChange, value } }) => {
          return (
            <div className="flex justify-center items-center mt-20">
              <input
                className="w-20 mt-3 text-xl text-center border-b border-gray-600 outline-none"
                type="number"
                placeholder="0"
                max={20}
                onChange={onChange}
                value={value}
              />
            </div>
          );
        }}
      />
    </div>
  );
};

export default TenthQuestion;
