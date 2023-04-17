import React from "react";
import { Controller } from "react-hook-form";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

interface IProps {
  currentStep: number;
  control: any;
  diaryQuestions: { title: string; hint: string }[];
  isErrors: boolean;
}
const FiftinthQuestion: React.FC<IProps> = ({
  currentStep,
  control,
  diaryQuestions,
  isErrors,
}) => {
  if (currentStep !== 15) return null;
  return (
    <div className="">
      <h2 className="text-2xl font-medium">
        {diaryQuestions[currentStep - 1].title}
      </h2>
      <p className="text-gray-600 text-sm font-sm mt-2">
        {diaryQuestions[currentStep - 1].hint}
      </p>
      <Controller
        name="comment"
        control={control}
        render={({ field: { onChange, value } }) => {
          return (
            <textarea
              className="w-full min-h-[10rem] p-2 mt-10 rounded-md mt-3 text-xl bg-gray-200"
              placeholder="Your comment..."
              onChange={onChange}
              value={value}
            />
          );
        }}
      />
      {isErrors ? (
        <div className="flex items-center text-red-500 justify-center">
          <ExclamationTriangleIcon className="h-6 w-6" />
          <p>Please go back and complete all required fields.</p>
        </div>
      ) : null}
    </div>
  );
};

export default FiftinthQuestion;
