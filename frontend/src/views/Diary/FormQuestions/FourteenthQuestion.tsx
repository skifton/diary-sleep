import React from "react";
import StarRatings from "react-star-ratings";
import { Controller } from "react-hook-form";

interface IProps {
  currentStep: number;
  control: any;
  diaryQuestions: { title: string; hint: string }[];
}
const FourteenthQuestion: React.FC<IProps> = ({
  currentStep,
  control,
  diaryQuestions,
}) => {
  if (currentStep !== 14) return null;
  return (
    <div className="">
      <h2 className="text-2xl font-medium">
        {diaryQuestions[currentStep - 1].title}
      </h2>
      <p className="text-gray-600 text-sm font-sm mt-2">
        {diaryQuestions[currentStep - 1].hint}
      </p>
      <Controller
        name="rateOfSleep"
        control={control}
        render={({ field: { onChange, value } }) => {
          return (
            <div className="w-full text-center mt-20">
              <StarRatings
                rating={value ? Number(value) : 0}
                starRatedColor="blue"
                changeRating={onChange}
                numberOfStars={5}
                name="rating"
              />
            </div>
          );
        }}
      />
    </div>
  );
};

export default FourteenthQuestion;
