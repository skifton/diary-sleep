import React from "react";
import { Controller } from "react-hook-form";

interface IProps {
  currentStep: number;
  control: any;
  diaryQuestions: { title: string; hint: string }[];
}
const FourthQuestion: React.FC<IProps> = ({
  currentStep,
  control,
  diaryQuestions,
}) => {
  if (currentStep !== 4) return null;
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
          name="kindOfAlcohol"
          control={control}
          render={({ field: { onChange, value } }) => {
            return (
              <div className="flex">
                <input
                  className="w-38 text-xl text-left border-b border-gray-600 outline-none"
                  type="text"
                  maxLength={30}
                  placeholder="beer, whiskey, jean..."
                  onChange={onChange}
                  value={value}
                />
              </div>
            );
          }}
        />
        <Controller
          name="amountOfAlcoholConsumedYesterday"
          control={control}
          render={({ field: { onChange, value } }) => {
            return (
              <div className="flex">
                <input
                  className="w-12 text-xl text-center border-b border-gray-600 outline-none"
                  type="number"
                  min={0}
                  max={10000}
                  placeholder="0"
                  onChange={onChange}
                  value={value}
                />
                <p className="mt-1 font-thin">&nbsp; ml</p>
              </div>
            );
          }}
        />
      </div>
    </div>
  );
};

export default FourthQuestion;
