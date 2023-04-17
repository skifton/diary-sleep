import React from "react";
import { Controller } from "react-hook-form";

interface IProps {
  currentStep: number;
  control: any;
  diaryQuestions: { title: string; hint: string }[];
}
const ThirdQuestion: React.FC<IProps> = ({
  currentStep,
  control,
  diaryQuestions,
}) => {
  if (currentStep !== 3) return null;
  return (
    <div className="">
      <h2 className="text-2xl font-medium">
        {diaryQuestions[currentStep - 1].title}
      </h2>
      <p className="text-gray-600 text-sm font-sm mt-2">
        {diaryQuestions[currentStep - 1].hint}
      </p>
      <Controller
        name="numberOfCigarretesSmokedYesterday"
        control={control}
        render={({ field: { onChange, value } }) => {
          return (
            <div className="flex justify-center mt-20">
              <input
                className="w-10 text-xl text-center border-b border-gray-600 outline-none"
                type="number"
                min={0}
                max={100}
                placeholder="0"
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

export default ThirdQuestion;
