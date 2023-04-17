import React from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { StaticDateTimePicker } from "@mui/x-date-pickers/StaticDateTimePicker";
import { Controller } from "react-hook-form";
dayjs.extend(utc);

interface IProps {
  currentStep: number;
  control: any;
  diaryQuestions: { title: string; hint: string }[];
  getValues: any
}
const SixthQuestion: React.FC<IProps> = ({
  currentStep,
  control,
  diaryQuestions,
  getValues,
}) => {
  if (currentStep !== 6) return null;
  const dicisionTimeToSleep = getValues("decisionTimeToSleep");
  const wakeUpTime = getValues("wakeUpTime");
  return (
    <div className="">
      <h2 className="text-2xl font-medium">
        {diaryQuestions[currentStep - 1].title}
      </h2>
      <p className="text-gray-600 text-sm font-sm mt-2">
        {diaryQuestions[currentStep - 1].hint}
      </p>
      <Controller
        name="timeWentToBedYesterday"
        control={control}
        render={({ field: { onChange, value } }) => {
          return ( 
            <div className="w-full text-center">
              <StaticDateTimePicker
                defaultValue={dayjs(new Date()).utc()}
                slotProps={{
                  actionBar: {
                    actions: [],
                  },
                  tabs: {
                    hidden: true,
                  },
                }}
                disableHighlightToday
                value={value}
                maxDateTime={wakeUpTime || null}
                minDateTime={dicisionTimeToSleep || null}
                onChange={onChange}
                ampm={false}
              />
            </div>
          );
        }}
      />
    </div>
  );
};

export default SixthQuestion;
